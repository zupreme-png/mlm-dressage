"use server";

// Server Action for the "Book a free session" lead form.
// Validates input and returns typed state for useActionState on the client.

export type BookingState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "contact" | "goal", string>>;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /[0-9]{7,}/; // at least 7 digits, ignoring formatting

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

  // TODO: wire to email/CRM (e.g. Resend, Formspree, or a database).
  // For now we log the lead server-side so nothing is lost during the placeholder phase.
  console.log("[MLM Dressage] New free-session booking:", {
    name,
    contact,
    goal,
    preferred,
    at: new Date().toISOString(),
  });

  return {
    status: "success",
    message:
      "You're in! We'll reach out within one business day to lock in your free session.",
  };
}
