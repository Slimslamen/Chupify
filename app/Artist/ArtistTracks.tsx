"use client";
import React, { useContext, useEffect, useState } from "react";
import PlayButton from "../(Components)/Buttons/PlayButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext, IExternalUrls } from "../Interfaces/types";
import ArtistImage from "../(Components)/ArtistImage";

export default function ArtistTracks() {
  const { Fetch5MostPopularTracks, setTracks, Tracks, PlayTrack } = useContext(AppContext)! as IContext;
  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);

  const externalUrls: IExternalUrls = { spotify: "spotify:album:2EZ8JL3dtb54VXi3k6E7k6" };

  function handleHover(name :string){
    setTracks((Track) => 
      Track?.map((item) => ({...item, IsHovered: item.name === name ? !item.IsHovered : item.IsHovered})))
  }

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await Fetch5MostPopularTracks();
      const filteredTracks = res.tracks.slice(0, 5).map((track) => ({...track, IsHovered:false}));
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
            onMouseEnter={() => handleHover(track.name)}
            onMouseLeave={() => handleHover(track.name)}
            className={` text-TextColor flex flex-row justify-between items-center bg-componentLightGrey hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50`}
          >
            <div className="flex flex-row items-center space-x-5">
              {track.IsHovered == false ? <p>{index + 1}</p> : <button onClick={() => PlayTrack(externalUrls)}><PlayButton /></button>}
              <div className="flex flex-row items-center text-white">
                <div className="flex flex-row space-x-5 items-center">
                  {ArtistLoad == true ? (
                    <ArtistImage src={track.album.images[0].url} alt={track.album.name} height={48} width={48} Radius={"4px"} />
                  ) : (
                    <p>Loading...</p>
                  )}
                  <h3>{track.name}</h3>
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
