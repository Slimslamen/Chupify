import React from "react";
import ArtistImage from "../(Components)/ArtistImage";
import RemoveButton from "../(Components)/Buttons/RemoveButton";

export default function Artists() {
  const imgsrc = "/JCole.webp";
  const altText = "Test";
  return (
    <div className="z mb-10 bg-componentGrey h-full rounded-tl-lg rounded-bl-lg w-[18em] py-6 px-2 overflow-y-auto items-start justify-start flex flex-col space-y-4">
      <div className="w-full flex flex-row items-center justify-between bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
        <div className="flex flex-row space-x-4 items-center w-full">
          <ArtistImage src={imgsrc} alt={altText} height={55} width={55} Radius={"4px"} />
          <p className="text-md">Mock Text</p>
        </div>
        <RemoveButton />
      </div>
      <div className="w-full flex flex-row items-center justify-between bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
        <div className="flex flex-row space-x-4 items-center w-full">
          <ArtistImage src={imgsrc} alt={altText} height={55} width={55} Radius={"4px"} />
          <p className="text-md">Mock Text</p>
        </div>
        <RemoveButton />
      </div>
      <div className="w-full flex flex-row items-center justify-between bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
        <div className="flex flex-row space-x-4 items-center w-full">
          <ArtistImage src={imgsrc} alt={altText} height={55} width={55} Radius={"4px"} />
          <p className="text-md">Mock Text</p>
        </div>
        <RemoveButton />
      </div>
      <div className="w-full flex flex-row items-center justify-between bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
        <div className="flex flex-row space-x-4 items-center w-full">
          <ArtistImage src={imgsrc} alt={altText} height={55} width={55} Radius={"4px"} />
          <p className="text-md">Mock Text</p>
        </div>
        <RemoveButton />
      </div>
    </div>
  );
}
