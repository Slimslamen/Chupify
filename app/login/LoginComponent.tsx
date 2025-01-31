"use client";


export default function LoginComponent() {

  const SpotifyAuth = (e : any) => {
    e.preventDefault()
    window.location.href = "/pages/api/auth/login"; 
  };

  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      <button onClick={(e) => SpotifyAuth(e)} className="btn" nonce={process.env.NEXT_PUBLIC_CLIENT_ID}>
        Sign in with Spotify
      </button>
    </div>
  );
}