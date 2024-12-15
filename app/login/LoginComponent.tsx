'use client'

import Link from "next/link";
import { useState } from "react";

export default function LoginComponent() {

  const clientId:string = "b27e34422d36480d98024631a9b2bc17";
  const clientSecret:string = "8c7c072e89d44197a669b8a6b1c24be8";

  const [AccessToken, setAccessToken] = useState({access_token:"", token_type:"", expires_in:0})

  const getSpotifyAccessToken = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      })
      if(response.ok)
      setAccessToken(await response.json());
      else if(!response.ok)
      {
        console.log(response.status)
      }
      alert(AccessToken.access_token)
  }
  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <h1>Insert Your Spotify Client-Id</h1>
      <form className="w-full flex flex-col items-center justify-center space-y-8">
        <div className="w-[69%] flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
          <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
            <path
              d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
              fill="#000000"
            ></path>
          </svg>
          <input id="" name="" type="text" className="w-full text-black bg-inherit focus:outline-none pl-1" />
        </div>
        <Link onClick={() => getSpotifyAccessToken()} href="/pages/index" className="btn">
          Login
        </Link>
      </form>
    </div>
  );
}
