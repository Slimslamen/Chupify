"use client";

import { Token } from "../Token";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginComponent() {
  const { data: session } = useSession();

  useEffect(() => {
    Token();
  }, []);

  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64  flex items-center justify-center flex-col space-y-3">
      {session ?
        <form
          className="w-full flex flex-col items-center justify-center space-y-8"
          onSubmit={() => signOut()}
        >
          <button type="submit" className="btn">
            Sign out
          </button>
        </form>
        :
        <form
          className="w-full flex flex-col items-center justify-center space-y-8"
          onSubmit={() => signIn()}
        >
          <button type="submit" className="btn">
            Sign in with Spotify
          </button>
        </form>
      }
    </div>
  );
}
