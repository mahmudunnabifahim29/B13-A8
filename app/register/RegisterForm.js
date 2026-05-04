"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setPending(true);

    const { error: signUpError } = await authClient.signUp.email({
      name,
      email,
      password,
      image: image || undefined,
      callbackURL: "/login",
    });

    if (signUpError) {
      setError(signUpError.message || "Registration failed.");
      setPending(false);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="auth-shell">
      <div className="auth-header">
        <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
          Register
        </p>
        <h1 className="font-display text-3xl text-ink-900">
          Create your account
        </h1>
        <p className="text-sm text-ink-600">
          Sign up to unlock private tiles and save your favorites.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-card">
        <label className="form-label">
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
            placeholder="Your name"
            required
          />
        </label>
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
          Photo URL
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="form-input"
            placeholder="https://"
          />
        </label>
        <label className="form-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-input"
            placeholder="Create a password"
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
            {pending ? "Creating account..." : "Register"}
          </button>
        </div>
      </form>

      <div className="auth-footer text-center mt-4">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="auth-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
