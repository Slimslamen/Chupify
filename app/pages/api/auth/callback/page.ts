
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";


export default async function Page({ searchParams, res } : any) {
  const Cookies = cookies();
    const code = (await searchParams).code;

    if (!code) {
      return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

    const data: { [key: string]: string } = { grant_type: "authorization_code", code: code, redirect_uri: "http://localhost:3000/pages/api/auth/callback"};
    console.log(data);

    console.log(JSON.stringify(data));

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
    redirect("/pages/api/chupify");
    // res.writeHead(302, { Location: '/blablae' });
    //  res.end();

  }
    else{
      return NextResponse.json({ error: "Response failed" }, { status: 500 });
    }

}