import { NextResponse } from "next/server";
import cookie from "cookie";
import { NextApiResponse } from "next";


export default async function handler({ searchParams, res } : { searchParams: any, res: NextApiResponse }) {
    const code = (await searchParams).code;

    if (!code) {
      return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

  //Creating the parameters for the request, then encoding every key and its' value in URI format and concatenating it, to then send it in the request body
  const data: { [key: string]: string } = { grant_type: "authorization_code", code: code, redirect_uri: "http://localhost:3000/pages/api/auth/callback"};
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

  if(response.ok)
  {
    console.log("res" + res)
    const TokenRes = await response.json();

    res.setHeader("Set-Cookie", cookie.serialize("refresh_token", TokenRes.refresh_token, {
      httpOnly: true,
      secure: true,
      path: "/"
    }))

    res.json({ access_token: TokenRes.access_token, expires_in: TokenRes.expires_in });
    // await SetCookies(TokenRes);
    // 'user server';
    // const CookieStore = await cookies();
    // (await cookies()).set("access_token", TokenRes.access_token, { path: "/", httpOnly: true, maxAge: TokenRes.expires_in, secure: true });
    // (await cookies()).set("refresh_token", TokenRes.refresh_token, { path: "/", httpOnly: true, secure: true });
    // redirect("/pages/api/chupify");

     //NextResponse.json({ refresh_token: TokenRes.refresh_token, access_token: TokenRes.access_token, expires_in: TokenRes.expires_in });

    res.redirect("/pages/api/chupify");

  }
    else{
      return NextResponse.json({ error: "Response failed" }, { status: 500 });
    }

}