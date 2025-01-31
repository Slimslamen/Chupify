import { NextApiRequest, NextApiResponse } from "next";

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
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
  scope: Scopes,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT!,
}).toString()}`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Redirecting to Spotify login");
  res.redirect(Login_URL);
}
