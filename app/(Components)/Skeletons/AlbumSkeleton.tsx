import React from "react";

export default function AlbumSkeleton() {
  return (
    <div className="flex flex-row space-x-5">
      <div className="flex flex-col bg-componentGrey w-48 h-64 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-componentGrey w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-componentGrey w-3/4 h-4 animate-pulse rounded-md"></div>
          <div className="bg-componentGrey w-2/3 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col bg-componentGrey w-48 h-64 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-componentGrey w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-componentGrey w-3/4 h-4 animate-pulse rounded-md"></div>
          <div className="bg-componentGrey w-2/3 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col bg-componentGrey w-48 h-64 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-componentGrey w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-componentGrey w-3/4 h-4 animate-pulse rounded-md"></div>
          <div className="bg-componentGrey w-2/3 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col bg-componentGrey w-48 h-64 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-componentGrey w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-componentGrey w-3/4 h-4 animate-pulse rounded-md"></div>
          <div className="bg-componentGrey w-2/3 h-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
