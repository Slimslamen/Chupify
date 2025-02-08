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

const LOGIN_URL = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  response_type: "code",
  client_id: process.env.CLIENT_ID as string,
  scope: Scopes,
  redirect_uri: "http://localhost:3000/api/auth/callback",
}).toString()}`;

export async function GET() {
    console.log("url for login" + LOGIN_URL)
    return NextResponse.redirect(LOGIN_URL);
  }