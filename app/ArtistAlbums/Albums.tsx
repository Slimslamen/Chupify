import React from "react";
import ArtistImage from "../(Components)/ArtistImage";

export default function Albums() {
  const imgsrc = "/mock.png";
  const altText = "Test";
  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-48 flex flex-col space-y-5">
      <div className="flex items-start ml-10 mt-3">
        <h2 className="text-xl">Albums</h2>
      </div>
      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col space-y-2">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <p className=" text-xs">Mock Text</p>
        </div>
        <div className="flex flex-col space-y-2">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <p className=" text-xs">Mock Text</p>
        </div>
        <div className="flex flex-col space-y-2">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <p className=" text-xs">Mock Text</p>
        </div>
        <div className="flex flex-col space-y-2">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <p className=" text-xs">Mock Text</p>
        </div>
      </div>
    </div>
  );
}
