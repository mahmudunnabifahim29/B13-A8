import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/app/my-profile/update/UpdateProfileForm";

export const dynamic = "force-dynamic";

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login?next=/my-profile/update");
  }

  return (
    <section className="section section--compact">
      <div className="container">
        <UpdateProfileForm initialUser={session.user} />
      </div>
    </section>
  );
}
