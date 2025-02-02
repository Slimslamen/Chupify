'use client';

import { useContext, useEffect } from "react";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "@/app/Interfaces/types";
import NavbarComponent from "../(Components)/NavbarComponent";
import ArtistComponent from "../Artist/ArtistComponent";
import Albums from "../ArtistAlbums/Albums";
import Artists from "../FollowList/Artists";
import { AccessCookies } from "../pages/api/Cookies";

export default function MainComponent() {
  const { FetchArtist, setArtist, Artist, GetCookies } = useContext(AppContext)! as IContext;
  
  useEffect(() => {
    const CallOnCookie = async () => {
      const token = await AccessCookies();
      if (token) {
        GetCookies(token); // Pass the token value directly
      }
    };

    const GetSearchQuery = async () => {
      const res = await FetchArtist();
      if (res) {
        setArtist(res);
      }
    };

    CallOnCookie();
    GetSearchQuery();
  }, []);
  
  useEffect(() => {
    if (Artist) {
      console.log("Updated Artist state: ", Artist);
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
