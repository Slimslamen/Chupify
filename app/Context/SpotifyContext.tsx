"use client";

import React, { createContext, ReactNode, useState } from "react";
import { IAlbumDataResponse, IArtist, IContext, IExternalUrls, IRefreshToken, ITrack } from "../Interfaces/types";

const AppContext = createContext<IContext | null>(null);

function SpotifyContext({ children }: { children: ReactNode }) {
  const [Artist, setArtist] = useState<IArtist | undefined>();
  const [Albums, setAlbums] = useState<IAlbumDataResponse | undefined>();
  const [Tracks, setTracks] = useState<ITrack[] | undefined>();
  const [SearchedArtist, setSearchedArtist] = useState<string | undefined>("");
  const [Token, setToken] = useState<string | undefined>();


  const clientId: string | undefined = process.env.NEXT_PUBLIC_CLIENT_ID;
  const artist: string = "6l3HvQ5sa6mXTsMTB19rO5";
  const Artista: string = "7HO5fOXE4gh3lzZn64tX2E";


  async function GetToken() {
    const response = await fetch("/api/auth/callback", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data",data);
  }

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
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }
  async function FetchArtistAlbums() {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}/albums?limit=4`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }

  async function Fetch5MostPopularTracks() {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}/top-tracks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }
  async function SearchForArtist(name: string) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${name}&type=artist&limit=1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const filteredData = data.artists.items[0].id;
      setSearchedArtist(filteredData);
      console.log("filter" + SearchedArtist);
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }

  async function PlayTrack(contextUri: IExternalUrls) {
    const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        context_uri: contextUri,
        offset: {
          position: 5,
        },
        position_ms: 0,
      }),
    });
    if (response.ok) {
      console.log("Ok");
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }
  async function SaveAlbumToLibrary(AlbumId: string) {
    const response = await fetch(`https://api.spotify.com/v1/me/albums?ids=${AlbumId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: AlbumId,
      }),
    });
    if (response.ok) {
      console.log("Ok");
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }

  async function RefreshToken() {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }
  
  const Values: IContext = {
    GetToken,
    FetchArtist,
    FetchArtistAlbums,
    Fetch5MostPopularTracks,
    SearchForArtist,
    PlayTrack,
    SaveAlbumToLibrary,
    RefreshToken,
    Artist,
    setArtist,
    setAlbums,
    Albums,
    Tracks,
    setTracks,
    SearchedArtist,
    setSearchedArtist,
    Token,
    setToken
  };
  return (
    <>
      <AppContext.Provider value={Values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, SpotifyContext };
