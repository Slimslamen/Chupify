'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Token } from "../Token";


export default function LoginComponent() {
  const [AccessToken, setAccessToken] = useState<string>("")
  
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getStaticProps();
      setAccessToken(token.access_token);
    };
    fetchToken();
  }, [])
  
  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <h1>Insert Your Spotify Client-Id</h1>
      <p>b27e34422d36480d98024631a9b2bc17</p>
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
        <Link onClick={() => getStaticProps()} href={{pathname:"/pages/index"}} className="btn">
          Login
        </Link>
      </form>
    </div>
  );
}


 async function getStaticProps() {
 const response = Token();
 return response;
}