"use client";

import Link from "next/link";
import { Token } from "../Token";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const clientId: string | undefined = process.env.NEXT_PUBLIC_CLIENT_ID;

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
        <div className="w-[69%] flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
          <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
            <path
              d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
              fill="#000000"
            ></path>
          </svg>
          <input id="" name="" type="text" className="w-full text-black bg-inherit focus:outline-none pl-1" />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
