import React from "react";
import ArtistImage from "../(Components)/ArtistImage";

export default function Artists() {
  const imgsrc = "/mock.png";
  const altText = "Test";
  return (
    <div className="bg-componentGrey h-full rounded-tl-lg rounded-bl-lg w-[18em] p-6 overflow-y-auto items-start justify-start flex flex-col space-y-8">
      <div className="flex flex-row space-x-4 items-center justify-center">
        <ArtistImage src={imgsrc} alt={altText} height={80} width={80} Radius={"4px"}/>
        <p className=" text-xs">Mock Text</p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center">
        <ArtistImage src={imgsrc} alt={altText} height={80} width={80} Radius={"4px"}/>
        <p className=" text-xs">Mock Text</p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center">
        <ArtistImage src={imgsrc} alt={altText} height={80} width={80} Radius={"4px"}/>
        <p className=" text-xs">Mock Text</p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center">
        <ArtistImage src={imgsrc} alt={altText} height={80} width={80} Radius={"4px"}/>
        <p className=" text-xs">Mock Text</p>
      </div>
    </div>
  );
}
