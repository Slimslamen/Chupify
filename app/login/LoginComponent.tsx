"use client";

import { Token } from "../Token";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;

  const router = useRouter();

  useEffect(() => {
    Token();
  }, []);

  async function NavigateToSpotifyAuth(e : any) {
    e.preventDefault();
    const params = {
      client_id: clientId!,
      response_type: "code",
      redirect_uri: "http://localhost:3000/pages/index",
      scope: "user-library-modify user-modify-playback-state playlist-modify-private",
    };
    const queryParam = new URLSearchParams(params).toString()
    
    const Url = `https://accounts.spotify.com/authorize?${queryParam}`;
    const response = await fetch(Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });
    if (response.ok) {
      router.push(Url);
      console.log("Url",Url)
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
    console.log(Url);
  }

  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <h1>Insert Your Spotify Client-Id</h1>
      <p>b27e34422d36480d98024631a9b2bc17</p>
      <form
        className="w-full flex flex-col items-center justify-center space-y-8"
        onSubmit={(e) => NavigateToSpotifyAuth(e)}
      >
        <button type="submit" className="btn">
          Login with Spotify
        </button>
      </form>
    </div>
  );
}
