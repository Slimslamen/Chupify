import React, { useContext, useEffect } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import FollowButton from "../(Components)/Buttons/FollowButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";

export default function Albums() {
  const { FetchArtistAlbums, setAlbums, Albums } = useContext(AppContext)! as IContext;

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await FetchArtistAlbums();
      if (res) {
        setAlbums(res);
      }
      console.log("response: ", Albums);
    };
    GetSearchQuery();
  }, []);

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
              className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-3 transition ease-in-out delay-50"
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
