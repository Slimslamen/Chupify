import { NextResponse } from "next/server";


export default async function POST(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
  
    if (!code) {
      return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

    console.log(code);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
    }),
  });

  const TokenRes = await response.json();

  if (TokenRes.ok) {
    const res = NextResponse.redirect("/pages/api/chupify");
    
    res.cookies.set("accessToken", TokenRes.access_token, {httpOnly: true, maxAge: TokenRes.expires_in, secure: true, path:"/"})

    res.cookies.set("refreshToken", TokenRes.refresh_token, {httpOnly: true, secure: true, path:"/"})

    return res;

  } else {
      console.log("Damn");
    return NextResponse.json({ error: "Failed to exchange tokens" }, { status: 500 });
  }
}