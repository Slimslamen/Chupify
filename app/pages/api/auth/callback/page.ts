import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import SetCookies from "../../SetCookies";



export default async function GET({ searchParams } : any) {
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

  var TokenRes;
  if(response.ok)
  {
    TokenRes = await response.json();
    await SetCookies(TokenRes);
    redirect("/pages/api/chupify");

  }
    else{
      return NextResponse.json({ error: "Response failed" }, { status: 500 });
    }

}