import { NextResponse } from "next/server";

const authRoutes = new Set(["/login", "/register"]);

const hasAuthCookie = (request) =>
  request.cookies
    .getAll()
    .some((cookie) => cookie.name.startsWith("better-auth"));

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const authed = hasAuthCookie(request);

  if (authRoutes.has(pathname) && authed) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
