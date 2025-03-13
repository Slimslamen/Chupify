'use client'
import React, { useContext, useEffect, useState } from "react";
import ArtistTracks from "./ArtistTracks";
import ArtistImage from "../(Components)/ArtistImage";
import ListSwitch from "../(Components)/ListSwitch";
import { IContext } from "../Interfaces/types";
import { AppContext } from "../Context/SpotifyContext";
import ArtistSkeleton from "../(Components)/Skeletons/ArtistSkeleton";
import gradientArray from "../lib/gradients";

export default function ArtistComponent() {
  const { Artist } = useContext(AppContext)! as IContext;


  const [gradient, setGradient] = useState("");

  function randomColor(){    
    const randomGradientIndex = Math.floor(Math.random() * gradientArray.length);
    setGradient(gradientArray[randomGradientIndex].backgroundLinear);
  }

  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);
  useEffect(() => {
    if (Artist) {
      setArtistLoad(true);
      randomColor();
    }
  }, [Artist]);

  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-[40em] py-5 px-8 relative z-10">
      <div className="z-[-2] absolute h-[500px] top-0 left-0 right-0 rounded-lg" style={{ background: `${gradient}` }}></div>
      <div className="flex flex-row items-center justify-between pr-2 z-20" >
        <div>
          {ArtistLoad ? (
            <div className="flex flex-row items-center space-x-10">
              <ArtistImage src={Artist!.images[0].url} alt={Artist!.name} height={160} width={160} Radius={"4px"} />
              <h1 className="py-2 text-7xl">{Artist!.name}</h1>
            </div>
          ) : (
            <ArtistSkeleton />
          )}
        </div>
        <div className="flex items-center">
          <ListSwitch />
        </div>
      </div>
      <ArtistTracks />
    </div>
  );
}
