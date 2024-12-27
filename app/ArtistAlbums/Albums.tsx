import React, { useContext, useEffect, useRef, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import FollowButton from "../(Components)/Buttons/FollowButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import { useSearchParams } from "next/navigation";

export default function Albums() {
  const { FetchArtistAlbums, setAlbums, Albums, setArtist } = useContext(AppContext)! as IContext;

  const searchParams = useSearchParams();

  const TokenRef = useRef<string>("");

  useEffect(() => {
    const GetSearchQuery = async () => {
      const search = await searchParams.get("key");
      if (search) {
        const token = JSON.parse(search) as string;
        if (TokenRef.current !== token) {
          TokenRef.current = token;
          const res = await FetchArtistAlbums(TokenRef.current);
          if (res) {
            setAlbums(res);
          }
          console.log("response: ", res);
        }
      }
    };
    GetSearchQuery();
  }, [searchParams, FetchArtistAlbums, setArtist, Albums]);

  useEffect(() => {
    if (Albums) {
      console.log("Updated Albums state: ", Albums);
    }
  }, [Albums]);

  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-80 flex flex-col space-y-5 overflow-x-auto">
      <div className="flex items-start ml-10 mt-3">
        <h2 className="text-2xl font-extrabold">Albums</h2>
      </div>
      <div className="flex flex-row w-full justify-around">
        {Albums &&
          Albums.items.map((album, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50"
            >
              <ArtistImage src={album.images[0].url} alt={album.name} height={140} width={140} Radius={"4px"} />
              <div className="space-y-1">
                <h4 className="font-extrabold w-full">Forest Hills Drive</h4>
                <div className="flex flex-row justify-between w-full items-center">
                  <p className="text-xs">Love Yourz</p>
                  <FollowButton />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
