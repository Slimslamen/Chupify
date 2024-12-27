"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IAlbumDataResponse, IArtist, IContext } from "../Interfaces/types";
import { useSearchParams } from "next/navigation";

const AppContext = createContext<IContext | null>(null);

function SpotifyContext({ children }: { children: ReactNode }) {
  const [Artist, setArtist] = useState<IArtist | undefined>();
  const [Albums, setAlbums] = useState<IAlbumDataResponse | undefined>();

  const clientId: string = "b27e34422d36480d98024631a9b2bc17";
  const artist: string = "6qxpnaukVayrQn6ViNvu9I";
  const Artista : string = "7HO5fOXE4gh3lzZn64tX2E";
  
  const Token = localStorage.getItem("token");

  async function FetchArtist() {
    const response = await fetch(`https://api.spotify.com/v1/artists/${Artista}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (!response.ok) {
       throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }
  async function FetchArtistAlbums(Token: string) {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}/albums?limit=4`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data as IAlbumDataResponse;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }

  async function RefreshToken() {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: Token!,
        client_id: clientId
      })
    });
    if (response.ok) {
      const data = await response.json();
        console.log(data);
      return data;
    } else if (!response.ok) {
        console.log("failed");
      return response.status;
    }
  }
  const Values: IContext = {
    FetchArtist,
    FetchArtistAlbums,
    RefreshToken,
    Artist,
    setArtist,
    setAlbums,
    Albums,
  };
  return (
    <>
      <AppContext.Provider value={Values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, SpotifyContext };
