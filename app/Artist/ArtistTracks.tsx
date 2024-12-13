'use client'
import React, { useState } from "react";
import ArtistSong from "./ArtistSong";
import PlayButton from "../(Components)/Buttons/PlayButton";

export default function ArtistTracks() {

  const [isHovering, setIsHovering] = useState<boolean>(false)

  return (
    <div className="h-[17.5em] rounded-md flex flex-col py-6 space-y-4">
      <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={` text-TextColor flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50`}>
        <div className="flex flex-row items-center space-x-5">
          {!isHovering ? <p>1</p> : <PlayButton />}
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>
      
      <div className="flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>2</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>3</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>4</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>5</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>
    </div>
  );
}
