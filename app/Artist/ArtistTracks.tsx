"use client";
import React, { useContext, useEffect, useState } from "react";
import PlayButton from "../(Components)/Buttons/PlayButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import ArtistImage from "../(Components)/ArtistImage";

export default function ArtistTracks() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { Fetch5MostPopularTracks, setTracks, Tracks } = useContext(AppContext)! as IContext;
  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await Fetch5MostPopularTracks();
      const filteredTracks = res.tracks.slice(0, 5);
      console.log("Tracks Response:", filteredTracks);
      if (res) {
        setTracks(filteredTracks);
        console.log("Tracks:" + Tracks);
      }
    };
    GetSearchQuery();
  }, []);

  useEffect(() => {
    if (Tracks) {
      console.log("Updated Tracks state: ", Tracks);
      setArtistLoad(true);
    }
  }, [Tracks]);

  return (
    <div className="h-[17.5em] rounded-md flex flex-col py-6 space-y-4">
      {Tracks &&
        Tracks.map((track, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={` text-TextColor flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50`}
          >
            <div className="flex flex-row items-center space-x-5">
              {!isHovering ? <p>{index + 1}</p> : <PlayButton />}
              <div className="flex flex-row items-center text-white">
                <div className="flex flex-row space-x-5 items-center">
                  {ArtistLoad == true ? (
                    <ArtistImage src={track.album.images[0].url} alt={track.album.name} height={48} width={48} Radius={"4px"} />
                  ) : (
                    <p>Loading...</p>
                  )}
                  <h3>Love Yourz</h3>
                </div>
              </div>
            </div>
            <h3>
              {Math.floor(track.duration_ms / 60000)}:{Math.floor((track.duration_ms % 60000) / 1000).toFixed(0)}
            </h3>
          </div>
        ))}
    </div>
  );
}
