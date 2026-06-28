"use client";

import { useActionState } from "react";
import { bookSession, type BookingState } from "../actions/book";
import { offer } from "../data/site";

const initialState: BookingState = { status: "idle", message: "" };

const fieldClass =
  "mt-1 w-full rounded-lg border border-bark/20 bg-white px-4 py-3 text-base text-bark outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

export function BookingForm() {
  const [state, formAction, pending] = useActionState(bookSession, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-moss/40 bg-white/80 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-moss/15 text-2xl text-moss">
          ✓
        </div>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-forest">
          Request received
        </h3>
        <p className="mt-2 leading-7 text-bark/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl border border-sand bg-white/80 p-7 sm:p-8">
      <p className="text-sm font-medium uppercase tracking-wider text-gold">
        {offer.short}
      </p>
      <h3 className="mt-1 font-serif text-2xl font-semibold text-forest">
        Claim your free session
      </h3>
      <p className="mt-2 text-sm text-bark/70">{offer.risk}</p>

      {/* Honeypot field — visually hidden, not for humans */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-forest">
            Your name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={fieldClass} />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact" className="text-sm font-medium text-forest">
            Email or phone
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com or (555) 555-5555"
            className={fieldClass}
          />
          {state.errors?.contact && (
            <p className="mt-1 text-sm text-red-600">{state.errors.contact}</p>
          )}
        </div>

        <div>
          <label htmlFor="goal" className="text-sm font-medium text-forest">
            What do you ride, and what&rsquo;s your goal?
          </label>
          <textarea
            id="goal"
            name="goal"
            rows={3}
            placeholder="e.g. Returning adult amateur, want to school 1st Level confidently."
            className={fieldClass}
          />
          {state.errors?.goal && (
            <p className="mt-1 text-sm text-red-600">{state.errors.goal}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferred" className="text-sm font-medium text-forest">
            Preferred days/times <span className="text-bark/50">(optional)</span>
          </label>
          <input
            id="preferred"
            name="preferred"
            type="text"
            placeholder="e.g. Weekday mornings"
            className={fieldClass}
          />
        </div>
      </div>

      {state.status === "error" && (
        <p className="mt-4 text-sm text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 w-full min-h-[44px] items-center justify-center rounded-full bg-gold px-7 text-sm font-semibold text-forest transition-colors hover:bg-[#c89a55] disabled:opacity-60"
      >
        {pending ? "Sending…" : offer.cta}
      </button>
      <p className="mt-3 text-center text-xs text-bark/50">
        No spam, ever. We typically reply within one business day.
      </p>
    </form>
  );
}
