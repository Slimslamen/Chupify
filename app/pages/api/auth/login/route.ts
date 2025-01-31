import { NextResponse } from "next/server";

const Scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "app-remote-control",
  "streaming",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
].join(",");

const Login_URL = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  response_type: "code",
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  scope: Scopes,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT as string,
}).toString()}`;

export async function GET() {
    return NextResponse.redirect(Login_URL);
  }