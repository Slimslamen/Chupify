"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "@/app/Interfaces/types";
import NavbarComponent from "../(Components)/NavbarComponent";
import ArtistComponent from "../Artist/ArtistComponent";
import Albums from "../ArtistAlbums/Albums";
import Artists from "../FollowList/Artists";
import { GetArtistFromDb } from "../lib/prismaTools";
import ListModal from "../(Components)/ListModal";

export default function MainComponent() {
  const { FetchArtist, setArtist, Artist, GetToken } = useContext(AppContext)! as IContext;

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await FetchArtist();
      if (res) {
        setArtist(res);
      }
    };
    GetToken();
    GetSearchQuery();
  }, []);

  useEffect(() => {
    GetArtistFromDb();
  }, [Artist]);

  return (
    <div>
      <div>
        <div className="space-y-12 ml-12">
          <NavbarComponent />
          <ArtistComponent />
          <Albums />
        </div>
        <div className="fixed h-[62em] top-0 right-0">
          <Artists />
        </div>
      </div>
      <div className="z-50">
        <ListModal />
      </div>
    </div>
  );
}
