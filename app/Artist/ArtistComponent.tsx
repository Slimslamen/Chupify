'use client'
import React, { useContext, useEffect, useState } from "react";
import ArtistTracks from "./ArtistTracks";
import ArtistImage from "../(Components)/ArtistImage";
import ListSwitch from "../(Components)/ListSwitch";
import { IContext } from "../Interfaces/types";
import { AppContext } from "../Context/SpotifyContext";
import ArtistSkeleton from "../(Components)/Skeletons/ArtistSkeleton";

export default function ArtistComponent() {
  const { Artist } = useContext(AppContext)! as IContext;

  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);
  useEffect(() => {
    if (Artist) {
      setArtistLoad(true);
    }
  }, [Artist]);

  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-[38em] py-5 px-8">
      <div className="flex flex-row items-center justify-between">
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
