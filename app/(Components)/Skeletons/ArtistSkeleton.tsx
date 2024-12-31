import React from "react";

export default function ArtistSkeleton() {
  return (
    <div className="flex items-center flex-row gap-10">
      <div className={`animate-pulse bg-componentGrey size-40 rounded-lg`}></div>
      <div className="flex flex-col gap-2">
        <div className={`animate-pulse bg-componentGrey w-80 h-20 rounded-lg`}></div>
      </div>
    </div>
  );
}
