import React, { useContext, useEffect, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import FollowButton from "../(Components)/Buttons/FollowButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import AlbumSkeleton from "../(Components)/Skeletons/AlbumSkeleton";

export default function Albums() {
  const { FetchArtistAlbums, setAlbums, Albums } = useContext(AppContext)! as IContext;

  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await FetchArtistAlbums();
      if (res) {
        setAlbums(res);
      }
      console.log("Albums: ", Albums);
    };
    GetSearchQuery();
  }, []);

useEffect(() => {
    if (Albums) {
      console.log("Updated Albums state: ", Albums);
      setArtistLoad(false)
    }
  }, [Albums]);

  return (
    <div className="bg-componentGrey rounded-lg w-[55em] pt-2 pb-10 flex flex-col space-y-5 overflow-x-auto">
      <div className="flex items-start ml-10 mt-3">
        <h2 className="text-2xl font-extrabold">Albums</h2>
      </div>
      <div className="flex flex-row w-full justify-around">
        {ArtistLoad == true ? (
          <div>
            {Albums &&
              Albums.items.map((album, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-3 transition ease-in-out delay-50"
                >
                  <ArtistImage src={album.images[0].url} alt={album.name} height={140} width={140} Radius={"4px"} />
                  <div className="space-y-1">
                    <h4 className="font-extrabold w-full h-11 mb-2 overflow-hidden">{album.name}</h4>
                    <div className="flex flex-row justify-between w-full items-center">
                      <p className="text-xs">{album.artists[0].name}</p>
                      <FollowButton />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )
        : <AlbumSkeleton />}
      </div>
    </div>
  );
}
