"use client";

import { Token } from "../Token";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginComponent() {
  const router = useRouter();

  useEffect(() => {
    Token();
  }, []);

  async function NavigateToSpotifyAuth(e: any) {
    e.preventDefault();

    const Login_URL = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
      scope: Scopes,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT!
        }).toString()}`;

    router.push(Login_URL);
  }

  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <button onClick={(e) => NavigateToSpotifyAuth(e)} className="btn">
        Sign in with Spotify
      </button>
    </div>
  );
}


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
].join(',');
