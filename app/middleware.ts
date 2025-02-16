import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken_token");

  if (!accessToken) {
    // Redirect to login page if no token is present
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (accessToken) {
    // Attach token to request headers
    const requestHeaders = new Headers(req.headers);

    console.log("!!!!!!HEADER!!!!!!!!!", requestHeaders);

    requestHeaders.set("Authorization", `Bearer ${accessToken}`);

    console.log("!!!!!!NEW HEADER!!!!!!!!!", requestHeaders);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
  if (!req.nextUrl.pathname.startsWith("/api/chupify") && !accessToken) {
    return NextResponse.redirect("http://localhost:3000");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
