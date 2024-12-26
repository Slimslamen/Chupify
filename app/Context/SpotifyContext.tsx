"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IAlbumData, IArtist, IContext, IToken } from "../Interfaces/types";

const AppContext = createContext<IContext | null>(null);

function SpotifyContext({ children }: { children: ReactNode }) {
  const [Artist, setArtist] = useState<IArtist | undefined>();
  const [Albums, setAlbums] = useState<IAlbumData[] | undefined>()

  const artist: string = "6qxpnaukVayrQn6ViNvu9I?si=L9jIcE1VRR222gAmtdWjDw";

  async function FetchArtist({ access_token, token_type }: IToken) {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}`, {
      method: "GET",
      headers: {
        Authorization: `${token_type} ${access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (!response.ok) {
      return response.status;
    }
  }
  async function FetchArtistAlbums({ access_token, token_type }: IToken) {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}/albums?limit=4`, {
      method: "GET",
      headers: {
        Authorization: `${token_type} ${access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else if (!response.ok) {
      return response.status;
    }
  }
  const Values: IContext = {
    FetchArtist,
    FetchArtistAlbums,
    Artist,
    setArtist,
    setAlbums,
    Albums
  };
  return (
    <>
      <AppContext.Provider value={Values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, SpotifyContext };
