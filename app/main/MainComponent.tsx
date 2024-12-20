'use client'
import { useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { IToken } from "@/app/Interfaces/UserProfile";
import NavbarComponent from "../NavbarFolder/NavbarComponent";
import ArtistComponent from "../Artist/ArtistComponent";
import Albums from "../ArtistAlbums/Albums";
import Artists from "../FollowList/Artists";



export default function Home() {

  const searchParams = useSearchParams();
  
  let test : IToken = {
    access_token: "",
    expires_in: 0,
    token_type: ""
  };
  useEffect(() => {
    const FetchArtist = async () => {
      const search = searchParams.get("key")
      console.log(search);
      if(search){
         test = JSON.parse(search) as IToken;
      }
      console.log(test);
    };
    getStaticProps(test);
    FetchArtist();
  }, [])
  

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

export async function getStaticProps({access_token}:IToken) {
    const response = await fetch(`https://open.spotify.com/artist/6qxpnaukVayrQn6ViNvu9I?si=KCc82mAfS_KZttYqhsp6Rw`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);      
        return data;
      } else if (!response.ok) {
        return response.status;
      }
}