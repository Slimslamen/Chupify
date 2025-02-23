"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IAlbumDataResponse, IArtist, IContext, ITrack } from "../Interfaces/types";
import { AddArtistToDb } from "../lib/prismaTools";

const AppContext = createContext<IContext | null>(null);

function SpotifyContext({ children }: { children: ReactNode }) {
  const [Artist, setArtist] = useState<IArtist | undefined>();
  const [Albums, setAlbums] = useState<IAlbumDataResponse | undefined>();
  const [Tracks, setTracks] = useState<ITrack[] | undefined>();
  const [SearchedArtist, setSearchedArtist] = useState<string | undefined>("");
  const [Token, setToken] = useState<string | undefined>();
  const [addToList, setAddToList] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(true)

  const artist: string = "6l3HvQ5sa6mXTsMTB19rO5";

  async function GetToken() {
    const res = await fetch("/api/auth/refresh", { credentials: "include" });
    if (res.ok) {
      const data = await res.json();
      setToken(data.access_token);
      return data.access_token;
    }
  }

  useEffect(() => {
    const Func = async () => {
      if (Artist) {
        if (Artist.saved == true) {
            AddArtistToDb(Artist)
        }
      }
    };
    Func();
  }, [addToList]);

  useEffect(() => {
    if (SearchedArtist) {
      FetchArtist();
      FetchArtistAlbums();
      Fetch5MostPopularTracks();
    }
  }, [SearchedArtist]);

  async function FetchArtist() {
    const token = Token || (await GetToken());
    const response = await fetch(`https://api.spotify.com/v1/artists/${SearchedArtist ? SearchedArtist : artist}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = await response.json();
      Object.assign(data, { saved: false });
      setArtist(data);
      return data;
    } else {
      throw new Error(`Error fetching artist: ${response.status}`);
    }
  }

  async function FetchArtistAlbums() {
    const token = Token || (await GetToken());
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${SearchedArtist ? SearchedArtist : artist}/albums?limit=4`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setAlbums(data);
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }

  async function Fetch5MostPopularTracks() {
    const token = Token || (await GetToken());
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${SearchedArtist ? SearchedArtist : artist}/top-tracks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setTracks(data.tracks.slice(0, 5).map((track: ITrack) => ({ ...track, IsHovered: false })));
      return data;
    } else {
      throw new Error(`Error fetching top tracks: ${response.status}`);
    }
  }

  async function SearchForArtist(name: string) {
    const token = Token || (await GetToken());
    const response = await fetch(`https://api.spotify.com/v1/search?q=${name}&type=artist&limit=1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const filteredData = data.artists.items[0].id;
      setSearchedArtist(filteredData);
      return data;
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
  }

  async function PlayTrack(contextUri: string) {
    console.log("!!!!!!!TRACK!!!!!!!!" + contextUri)
    const token = Token || (await GetToken());
    const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: [contextUri],
        position_ms: 0,
      }),
    });
    if (response.ok) {
      return;
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }
  async function SaveAlbumToLibrary(AlbumId: string) {
    const token = Token || (await GetToken());
    const response = await fetch(`https://api.spotify.com/v1/me/albums?ids=${AlbumId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: AlbumId,
      }),
    });
    if (response.ok) {
      return;
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }
  async function GetLatestAlbumOrTracks() {
    const token = Token || (await GetToken());
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${SearchedArtist}/albums?include_groups=single%2Calbum`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Data ", data);
      return;
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }
  async function SaveTrackToList(uri:string) {
    const token = Token || (await GetToken());
    //const total = await GetTotalTracksInList()
    
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/1rpJgvmkDkzxiChjPXgRSP/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: [uri],
        }),
      }
    );
    if (response.ok) {
      await response.json();    
      return;
    } else {
      throw new Error(`Error playing track: ${response.status}`);
    }
  }

  async function GetTotalTracksInList(){
    const token = Token || (await GetToken());
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/1rpJgvmkDkzxiChjPXgRSP/tracks?fields=total`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Total Tracks ", data)
      return data;
    } else {
      throw new Error(`Error playing track: ${response.status}`);
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
    GetLatestAlbumOrTracks,
    SaveTrackToList,
    GetTotalTracksInList,
    Artist,
    setArtist,
    setAlbums,
    Albums,
    Tracks,
    setTracks,
    SearchedArtist,
    setSearchedArtist,
    Token,
    setToken,
    addToList,
    setAddToList,
    openModal, 
    setOpenModal
  };
  return (
    <>
      <AppContext.Provider value={Values}>{children}</AppContext.Provider>
    </>
  );
}

export { AppContext, SpotifyContext };
