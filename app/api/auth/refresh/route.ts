import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const refreshToken = req.headers.get("cookie")?.split("refresh_token=")[1]?.split(";")[0];

  console.log("refreshToken", refreshToken);

  if (!refreshToken) {
    return NextResponse.json({ error: "Refresh token missing" }, { status: 400 });
  }

  const refreshResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
    }),
  });

  const refreshData = await refreshResponse.json();
  const response = NextResponse.json({ access_token: refreshData.access_token });

  return response;
}