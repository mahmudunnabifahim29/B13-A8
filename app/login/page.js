import LoginForm from "@/app/login/LoginForm";

export default async function LoginPage({ searchParams }) {
  const { next: nextUrl } = await searchParams;

  return (
    <section className="section section--compact">
      <div className="container">
        <LoginForm nextUrl={nextUrl} />
      </div>
    </section>
  );
}
