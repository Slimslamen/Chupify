import React, { useContext, useEffect, useRef, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import FollowButton from "../(Components)/Buttons/FollowButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext, IToken } from "../Interfaces/types";
import { useSearchParams } from "next/navigation";

export default function Albums() {
  const imgsrc = "/JCole.webp";
  const altText = "Test";

  const { FetchArtistAlbums, setAlbums, Albums } = useContext(AppContext)! as IContext;
  const searchParams = useSearchParams();

  const TokenRef = useRef<IToken>({
    access_token: "",
    expires_in: 0,
    token_type: "",
  });

  useEffect(() => {
    const GetSearchQuery = async () => {
      const search = await searchParams.get("key");
      if (search) {
        const token = JSON.parse(search) as IToken;
        if (JSON.stringify(TokenRef.current) !== JSON.stringify(token)) {
          TokenRef.current = token;
          const res = await FetchArtistAlbums(TokenRef.current);
          if (res) {
            setAlbums(res);
          }
          console.log("Albums "+res);
          console.log("Albums "+Albums)
        }
      }
    };
    GetSearchQuery();
  }, [searchParams, FetchArtistAlbums, setAlbums, Albums]);

  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);
  useEffect(() => {
    if (Albums) {
      setArtistLoad(true);
    }
  }, [Albums]);
  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-80 flex flex-col space-y-5 overflow-x-auto">
      <div className="flex items-start ml-10 mt-3">
        <h2 className="text-2xl font-extrabold">Albums</h2>
      </div>
      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <div className="space-y-1">
            <h4 className="font-extrabold w-full">Forest Hills Drive</h4>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-xs">Love Yourz</p>
              <FollowButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <div className="space-y-1">
            <h4 className="font-extrabold w-full">Forest Hills Drive</h4>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-xs">Mock Text</p>
              <FollowButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <div className="space-y-1">
            <h4 className="font-extrabold w-full">Forest Hills Drive</h4>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-xs">Mock Text</p>
              <FollowButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-40 bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50">
          <ArtistImage src={imgsrc} alt={altText} height={140} width={140} Radius={"4px"} />
          <div className="space-y-1">
            <h4 className="font-extrabold w-full">Forest Hills Drive</h4>
            <div className="flex flex-row justify-between w-full items-center">
              <p className="text-xs">Mock Text</p>
              <FollowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
