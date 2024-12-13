import React from "react";
import ArtistTracks from "./ArtistTracks";
import ArtistImage from "../(Components)/ArtistImage";
import ListSwitch from "../(Components)/ListSwitch";

export default function ArtistComponent() {
  const imgsrc = "/mock.png";
  const altText = "Test";
  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-[28em] py-5 px-8 space-y-2">
      <div className="flex flex-row items-center justify-between">
        <div className="space-x-10 flex flex-row items-center">
          <ArtistImage src={imgsrc} alt={altText} height={180} width={180} Radius={"4px"} />
          <h1 className="py-2 text-7xl">J.Cole</h1>
        </div>
        <div className="flex items-center">
          <ListSwitch />
        </div>
      </div>
      <ArtistTracks />
    </div>
  );
}
