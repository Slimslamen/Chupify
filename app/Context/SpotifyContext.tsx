'use client'

import React, { createContext, ReactNode, useState } from 'react'
import { IArtist, IContext, IToken } from '../Interfaces/types';

const AppContext = createContext<IContext| null>(null);

function SpotifyContext({ children }: { children: ReactNode }) {


    const [Artist, setArtist] = useState<IArtist | undefined>()

    async function FetchArtist({ access_token, token_type  }: IToken) {
    const artist:string = "6qxpnaukVayrQn6ViNvu9I?si=L9jIcE1VRR222gAmtdWjDw";
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist}/top-tracks`, {
        method: "GET",
        headers: {
        "Authorization": `${token_type} ${access_token}`,
        "Content-Type": "application/x-www-form-urlencoded"
        },
    });  
        if (response.ok) {
            const data = await response.json();
            return data;
        } else if (!response.ok) {
            return response.status;
        }
    }

const Values : IContext = {
    FetchArtist,
    Artist, 
    setArtist
}
  return (
    <>
        <AppContext.Provider value={Values}>
            {children}
        </AppContext.Provider>
    </>
  )
}

export { AppContext, SpotifyContext}