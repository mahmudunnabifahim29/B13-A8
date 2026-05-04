"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginForm({ nextUrl }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const destination = typeof nextUrl === "string" && nextUrl ? nextUrl : "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setPending(true);

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: destination,
    });

    if (signInError) {
      setError(signInError.message || "Login failed. Please try again.");
      setPending(false);
      return;
    }

    router.push(destination);
  };

  return (
    <div className="auth-shell">
      <div className="auth-header">
        <p className="text-sm uppercase tracking-[0.35em] text-ink-600">Login</p>
        <h1 className="font-display text-3xl text-ink-900">Welcome back</h1>
        <p className="text-sm text-ink-600">
          Sign in to explore private tile details and manage your profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-card">
        <label className="form-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="form-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-input"
            placeholder="Enter your password"
            minLength={8}
            required
          />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <div className="form-actions">
          <button
            type="submit"
            className="btn-primary btn-block"
            disabled={pending}
          >
            {pending ? "Signing in..." : "Login"}
          </button>
        </div>
      </form>

      <div className="auth-footer text-center mt-4">
        <p>
          New here?{" "}
          <Link href="/register" className="auth-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
