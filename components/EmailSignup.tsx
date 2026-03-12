"use client";

import { useState, FormEvent } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    // Placeholder: in the future, POST to an API route or external service
    setStatus("success");
    setMessage("Thanks. We'll be in touch when the archive is ready.");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <label htmlFor="email-signup-input" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup-input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          disabled={status === "success"}
          className="min-w-0 flex-1 rounded-md border border-dark-border bg-dark-bg px-4 py-3 text-white placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "success"}
          className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-dark-bg transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-60"
        >
          {status === "success" ? "Subscribed" : "Get Updates"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-3 text-sm ${
            status === "success" ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
