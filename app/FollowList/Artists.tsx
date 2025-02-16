import React, { useContext, useEffect, useRef, useState } from "react";
import ArtistImage from "../(Components)/ArtistImage";
import RemoveButton from "../(Components)/Buttons/RemoveButton";
import { DeleteArtistFromDb, GetArtistFromDb } from "../lib/prismaTools";
import { AppContext } from "../Context/SpotifyContext";
import { IContext, IFollowedArtist } from "../Interfaces/types";

export default function Artists() {
  const { addToList } = useContext(AppContext)! as IContext;
  const [List, setList] = useState<IFollowedArtist[]>([]);
  const [deleted, setDeleted] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const deleteDb = (artistId: string) => {
    setDeleted(true);
    DeleteArtistFromDb(artistId);
    console.log("Id " + artistId);
  };

  useEffect(() => {
    const func = async () => {
      const artistsInList = await GetArtistFromDb();
      if (artistsInList) setList(artistsInList);
      setDeleted(false);

      console.log("!!!List!!!", List);
    };
    func();
  }, [deleted, addToList]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 600);
  }, [addToList])
  

  return (
    <div id="style-2" className="scrollbar mb-10 bg-componentGrey h-full rounded-tl-lg rounded-bl-lg w-[20em] py-6 px-2 overflow-y-auto items-center justify-start flex flex-col space-y-5">
      <div className="flex flex-col space-y-5 items-start justify-start force-overflow">
        {List &&
          List.map((item, index) => (
            <div
              key={index}
              className="w-64 flex flex-row items-center justify-between bg-componentLightGrey hover:bg-componentGrey rounded-md py-3 px-4 transition ease-in-out delay-50"
            >
              <div className="flex flex-row space-x-4 items-center w-full">
                <ArtistImage src={item.image} alt={item.artist_name} height={80} width={80} Radius={"4px"} />
                <h4 className="font-bold w-full">{item.artist_name}</h4>
              </div>
              <RemoveButton onDelete={() => deleteDb(item.id)} />
            </div>
          ))}
          <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
}
