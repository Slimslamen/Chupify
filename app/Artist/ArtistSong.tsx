import React, { useContext, useEffect, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import { IContext } from "../Interfaces/types";
import { AppContext } from "../Context/SpotifyContext";

export default function ArtistSong() {
  const { Artist } = useContext(AppContext)! as IContext;

  const [ArtistLoad, setArtistLoad] = useState<boolean>(false);
  useEffect(() => {
    if (Artist) {
      setArtistLoad(true);
    }
  }, [Artist]);
  const imgsrc = "/JCole.webp";
  const altText = "Test";

  return (
    <div className="flex flex-row items-center text-white">
      <div className="flex flex-row space-x-5 items-center">
        { ArtistLoad == true ? 
        <ArtistImage src={imgsrc} alt={altText} height={48} width={48} Radius={"4px"} />
        :
         <p>Loading...</p> }
        <h3>Love Yourz</h3>
      </div>
    </div>
  );
}
