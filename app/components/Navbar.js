"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <header className="site-header">
      <div className="container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-ink-900"
          >
            Tiles Gallery
          </Link>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${active ? " nav-link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-center gap-3">
          {isPending ? (
            <span className="text-sm text-ink-500">Checking session...</span>
          ) : user ? (
            <>
              <Link
                href="/my-profile"
                className="profile-chip"
              >
                <span className="profile-chip__avatar">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span>{initial}</span>
                  )}
                </span>
                <span className="hidden sm:inline">
                  {user.name || "Profile"}
                </span>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-outline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
