import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refresh_token");

  console.log("!!!!!!!COOKIE!!!!!!!",refreshToken)

  if (!refreshToken) {
    // Redirect to login page if no token is present
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (refreshToken) {
    // Attach token to request headers
    const requestHeaders = new Headers(req.headers);

    console.log("!!!!!!HEADER!!!!!!!!!", requestHeaders);

    requestHeaders.set("Authorization", `Bearer ${refreshToken}`);

    console.log("!!!!!!NEW HEADER!!!!!!!!!", requestHeaders);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  if (!req.nextUrl.pathname.startsWith("/api/auth") && !refreshToken) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
