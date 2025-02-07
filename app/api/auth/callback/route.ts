import { NextResponse } from "next/server";
import cookie from "cookie";
import { NextApiResponse } from "next";

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

    //Creating the parameters for the request, then encoding every key and its' value in URI format and concatenating it, to then send it in the request body
    const data: { [key: string]: string } = { grant_type: "authorization_code", code: code, redirect_uri: "http://localhost:3000/api/auth/callback"};
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${Buffer.from(
                `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
            ).toString("base64")}`,
        },
        body: formBody,
    });

    if(response.ok) {
        const TokenRes = await response.json();
        console.log(code)

        const TokenResponse = NextResponse.redirect("http://localhost:3000/api/chupify");
        
        TokenResponse.cookies.set("access_token", TokenRes.access_token, { httpOnly: true, maxAge: TokenRes.expires_in });
        TokenResponse.cookies.set("refresh_token", TokenRes.refresh_token, { httpOnly: true, secure: true });

        return TokenResponse;

    } else {
        return NextResponse.json({ error: "Response failed" }, { status: 500 });
    }
}