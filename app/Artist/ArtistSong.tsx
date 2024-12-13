import React from "react";
import ArtistImage from "../(Components)/ArtistImage";

export default function ArtistSong() {
  const imgsrc = "/JCole.webp";
  const altText = "Test";
  return (
    <div className="flex flex-row items-center text-white">
      <div className="flex flex-row space-x-5 items-center">
        <ArtistImage src={imgsrc} alt={altText} height={48} width={48} Radius={"4px"} />
        <h3>Love Yourz</h3>
      </div>
    </div>
  );
}
