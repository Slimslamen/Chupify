import React, { useContext, useEffect, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import FollowButton from "../(Components)/Buttons/FollowButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import AlbumSkeleton from "../(Components)/Skeletons/AlbumSkeleton";

export default function Albums() {
  const { FetchArtistAlbums, setAlbums, Albums, SaveAlbumToLibrary } = useContext(AppContext)! as IContext;

  const [AlbumLoad, setAlbumLoad] = useState<boolean>(false);

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
      console.log("Albums ", Albums)
      setAlbumLoad(true)
    }
  }, [Albums]);

  return (
    <div className="bg-componentGrey rounded-lg w-[55em] pt-2 pb-10 space-y-5 overflow-x-auto">
      <div className="flex items-start ml-10 mt-3">
        <h2 className="text-2xl font-extrabold">Albums</h2>
      </div>
      <div className="flex items-center w-full justify-around">
        {AlbumLoad ? (
          <div className="flex flex-row space-x-12">
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
                      <p className="text-xs text-zinc-400">{album.artists[0].name}</p>
                      <button onClick={() => SaveAlbumToLibrary(album.id)}><FollowButton /></button>
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
