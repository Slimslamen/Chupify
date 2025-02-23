import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    
    // If no code is provided, it will run a loop 1 sec at a time until a code is provided
    if (!code) {
        while (!code) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }
    
    console.log("!!!!!!CODE!!!!!!!" + code)

    // Creating the parameters for the request, then encoding every key and its' value in URI format and concatenating it, to then send it in the request body
    const data: { [key: string]: string } = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URI as string,
    };
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${Buffer.from(
                `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
            ).toString("base64")}`,
        },
        body: formBody,
    });
    

    if (response.ok) {
        const TokenRes = await response.json();

        const TokenResponse = NextResponse.redirect("http://localhost:3000/api/chupify");

        TokenResponse.cookies.set("access_token", TokenRes.access_token, { httpOnly: true, maxAge: TokenRes.expires_in, path: "/", secure: true });
        TokenResponse.cookies.set("refresh_token", TokenRes.refresh_token, { httpOnly: true, secure: true, path:"/" });

        return TokenResponse;

    } else {
        return NextResponse.json({ error: "Response failed" }, { status: 500 });
    }
}