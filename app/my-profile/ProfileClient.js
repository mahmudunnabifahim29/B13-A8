"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfileClient({ initialUser }) {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user || initialUser;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-ink-600">
          My Profile
        </p>
        <h1 className="font-display text-3xl text-ink-900">Profile Overview</h1>
        <p className="text-sm text-ink-600">
          Manage your profile details and update your tile preferences.
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-meta">
          <div className="profile-avatar">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name || "User"}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : null}
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-ink-900">
              {user?.name || "Guest"}
            </h2>
            <p className="text-sm text-ink-600">{user?.email}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
              {isPending ? "Refreshing session" : "Active member"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/my-profile/update" className="btn-primary">
          Update Information
        </Link>
        <Link href="/all-tiles" className="btn-outline">
          Browse Tiles
        </Link>
      </div>
    </div>
  );
}
