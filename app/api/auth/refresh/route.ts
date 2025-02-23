import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const refreshToken = req.headers.get("cookie")?.split("refresh_token=")[1]?.split(";")[0];

  if (!refreshToken) {
    return NextResponse.json({ error: "Refresh token missing" }, { status: 400 });
  }

  const data: { [key: string]: string } = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: process.env.CLIENT_ID as string,
    client_secret: process.env.CLIENT_SECRET as string,
  };
  const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

  const refreshResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64")}`,
    },
    body: formBody,
  });

  if (refreshResponse.ok) {
    const refreshRes = await refreshResponse.json();

    console.log("!!!!!!!!DATA!!!!!!!!!!!", refreshRes);
    (await cookies()).delete("refresh_token");

    const response = NextResponse.json({ access_token: refreshRes.access_token });
    response.cookies.set("access_token", refreshRes.access_token, { httpOnly: true, maxAge: refreshRes.expires_in, path: "/", secure: true });
    response.cookies.set("refresh_token", refreshRes.refresh_token, { httpOnly: true, secure: true, path: "/" });

    return response;
  } else {
    return NextResponse.json({ error: "Response failed" }, { status: 401 });
  }
}