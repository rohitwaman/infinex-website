import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get(
    "infinex_admin_session"
  )?.value;

  const pathname = request.nextUrl.pathname;

  const isDashboardRoute =
    pathname.startsWith("/dashboard");

  const isLoginRoute =
    pathname === "/login";

  if (
    isDashboardRoute &&
    session !== "authenticated"
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (
    isLoginRoute &&
    session === "authenticated"
  ) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
  ],
};