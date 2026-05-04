"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ initialUser }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user || initialUser;
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setPending(true);

    const { error: updateError } = await authClient.updateUser({
      name,
      image: image || undefined,
    });

    if (updateError) {
      setError(updateError.message || "Update failed.");
      setPending(false);
      return;
    }

    setSuccess("Profile updated successfully.");
    setPending(false);
    router.push("/my-profile");
  };

  return (
    <div className="form-shell">
      <div className="auth-header">
        <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
          Update Info
        </p>
        <h1 className="font-display text-3xl text-ink-900">
          Update Profile Information
        </h1>
        <p className="text-sm text-ink-600">
          Keep your name and image up to date for your tile gallery profile.
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
          Image URL
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="form-input"
            placeholder="https://"
          />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        {success ? <p className="form-success">{success}</p> : null}
        <div className="form-actions">
          <button
            type="submit"
            className="btn-primary btn-block"
            disabled={pending}
          >
            {pending ? "Updating..." : "Update Information"}
          </button>
        </div>
      </form>

      <div className="auth-footer">
        <Link href="/my-profile" className="auth-link">
          Back to profile
        </Link>
      </div>
    </div>
  );
}
