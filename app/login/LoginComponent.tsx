"use client";

import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const router = useRouter();

  const SpotifyAuth = (e : any) => {
    e.preventDefault()
    router.push("/pages/api/auth/login"); // Use router.push to navigate to the login URL
  };

  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <button onClick={(e) => SpotifyAuth(e)} className="btn" nonce={process.env.NEXT_PUBLIC_CLIENT_ID}>
        Sign in with Spotify
      </button>
    </div>
  );
}