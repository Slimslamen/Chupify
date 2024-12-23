'use client'
import { useContext, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AppContext } from "../Context/SpotifyContext";
import { IContext, IToken } from "@/app/Interfaces/types";
import NavbarComponent from "../NavbarFolder/NavbarComponent";
import ArtistComponent from "../Artist/ArtistComponent";
import Albums from "../ArtistAlbums/Albums";
import Artists from "../FollowList/Artists";

export default function MainComponent() {

  const { FetchArtist, setArtist, Artist } = useContext(AppContext)! as IContext;

  const searchParams = useSearchParams();
  
  const TokenRef = useRef<IToken>({
    access_token: "",
    expires_in: 0,
    token_type: ""
  });
  useEffect(() => {
    const GetSearchQuery = async () => {
      const search = await searchParams.get("key")
      if(search){
         TokenRef.current = JSON.parse(search) as IToken;
      }   
     const res = await FetchArtist(TokenRef.current);
     if(res)
     setArtist(res);
     console.log(res);
     console.log("img "+Artist?.images[0].url);
     
    };
    GetSearchQuery();
  }, [TokenRef])
  

  return (
    <div>
      <div className="space-y-8 ml-12">
        <NavbarComponent />
        <ArtistComponent />
        <Albums />
      </div>
      <div className="fixed h-[33em] top-0 right-0">
        <Artists />
      </div>
    </div>
  );
}