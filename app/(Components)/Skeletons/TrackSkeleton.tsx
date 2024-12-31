import React from "react";

export default function TrackSkeleton() {
  return (
    <div className="flex items-center flex-col space-y-4">
        <div className={`animate-pulse bg-componentGrey w-full h-16 rounded-lg`}></div>
        <div className={`animate-pulse bg-componentGrey w-full h-16 rounded-lg`}></div>
        <div className={`animate-pulse bg-componentGrey w-full h-16 rounded-lg`}></div>
        <div className={`animate-pulse bg-componentGrey w-full h-16 rounded-lg`}></div>
        <div className={`animate-pulse bg-componentGrey w-full h-16 rounded-lg`}></div>
    </div>
  );
}
