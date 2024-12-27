'use client'
import { useContext, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "@/app/Interfaces/types";
import NavbarComponent from "../NavbarFolder/NavbarComponent";
import ArtistComponent from "../Artist/ArtistComponent";
import Albums from "../ArtistAlbums/Albums";
import Artists from "../FollowList/Artists";

export default function MainComponent() {
  const { FetchArtist, setArtist, Artist } = useContext(AppContext)! as IContext;
  const searchParams = useSearchParams();
  
  const TokenRef = useRef<string>("");

  useEffect(() => {
    const GetSearchQuery = async () => {
      const search = await searchParams.get("key");
      if (search) {
        const token = JSON.parse(search);
        if (TokenRef.current !== token) {
          TokenRef.current = token;
          const res = await FetchArtist(TokenRef.current);
          if (res) {
            setArtist(res);
          }
        }
      }
    };
    GetSearchQuery();
  }, [searchParams, FetchArtist, setArtist]);
    useEffect(() => {
      if (Artist) {
        console.log("Updated Albums state: ", Artist);
      }
    }, [Artist]);

  return (
    <div>
      <div className="space-y-8 ml-12 z-0">
        <NavbarComponent />
        <ArtistComponent />
        <Albums />
      </div>
      <div className="fixed h-[33em] top-0 right-0 z-10">
        <Artists />
      </div>
    </div>
  );
}