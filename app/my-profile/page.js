import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileClient from "@/app/my-profile/ProfileClient";

export const dynamic = "force-dynamic";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login?next=/my-profile");
  }

  return (
    <section className="section section--compact">
      <div className="container">
        <ProfileClient initialUser={session.user} />
      </div>
    </section>
  );
}
