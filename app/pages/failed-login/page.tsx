import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-[30em] mx-auto mt-48 rounded-lg bg-componentGrey h-64 space-y-10 flex items-center justify-center flex-col">
      <h1 className=" text-3xl">Login failed...</h1>
      <div className="w-full flex flex-col items-center justify-center">
        <Link href="/" className="btn">
          Try again
        </Link>
      </div>
    </div>
  );
}
