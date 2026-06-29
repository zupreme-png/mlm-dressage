"use server";

import { Resend } from "resend";
import { site } from "../data/site";

// Server Action for the "Book a free session" lead form.
// Validates input, emails the lead to the inbox, and returns typed state
// for useActionState on the client.

export type BookingState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "contact" | "goal", string>>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /[0-9]{7,}/; // at least 7 digits, ignoring formatting

type Lead = {
  name: string;
  contact: string;
  goal: string;
  preferred: string;
};

// Forwards the lead to the business inbox via Resend.
// Returns true if an email was sent, false if email isn't configured.
async function forwardLead(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  // Default sender works with no domain setup because the destination is the
  // account owner's own inbox. Override with BOOKING_FROM once a domain is verified.
  const from = process.env.BOOKING_FROM ?? "MLM Dressage <onboarding@resend.dev>";
  const replyTo = emailRe.test(lead.contact) ? lead.contact : undefined;

  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo,
    subject: `New free-session request — ${lead.name}`,
    text: [
      "New free-session request from the MLM Dressage website:",
      "",
      `Name:      ${lead.name}`,
      `Contact:   ${lead.contact}`,
      `Goal:      ${lead.goal}`,
      `Preferred: ${lead.preferred || "—"}`,
      "",
      `Received:  ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
  return true;
}

export async function bookSession(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const goal = String(formData.get("goal") ?? "").trim();
  const preferred = String(formData.get("preferred") ?? "").trim();

  // Honeypot — bots fill hidden fields; humans don't.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const errors: BookingState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  const isContactValid = emailRe.test(contact) || phoneRe.test(contact);
  if (!isContactValid) errors.contact = "Enter a valid email or phone number.";
  if (goal.length < 3) errors.goal = "Tell us a little about your goal.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const lead: Lead = { name, contact, goal, preferred };

  // Always log so a lead is never lost, even if email delivery fails.
  console.log("[MLM Dressage] New free-session booking:", {
    ...lead,
    at: new Date().toISOString(),
  });

  try {
    const sent = await forwardLead(lead);
    if (!sent) {
      console.warn(
        "[MLM Dressage] RESEND_API_KEY not set — lead logged but not emailed.",
      );
    }
  } catch (err) {
    // Don't fail the user's submission if email hiccups; the lead is logged above.
    console.error("[MLM Dressage] Failed to email lead:", err);
  }

  return {
    status: "success",
    message:
      "You're in! We'll reach out within one business day to lock in your free session.",
  };
}
