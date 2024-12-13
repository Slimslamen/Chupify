import React from "react";
import ArtistSong from "./ArtistSong";

export default function ArtistTracks() {
  return (
    <div className="h-[17.5em] rounded-md flex flex-col py-6 space-y-2">
      <div className="flex flex-row justify-between items-center hover:bg-componentGreyHover p-2 rounded-lg transition ease-in-out delay-50">
        <div className="flex flex-row items-center space-x-5">
          <p>1</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>
      
      <div className="flex flex-row justify-between items-center hover:bg-componentGreyHover p-2 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>2</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center hover:bg-componentGreyHover p-2 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>3</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center hover:bg-componentGreyHover p-2 rounded-lg transition ease-in-out delay-50">
      <div className="flex flex-row items-center space-x-5">
          <p>4</p>
          <ArtistSong />
        </div>
        <div className="flex flex-row space-x-20">
          <h3>1 808 827 112</h3>
          <h3>3:22</h3>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center hover:bg-componentGreyHover p-2 rounded-lg transition ease-in-out delay-50">
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
