import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import { AddArtistToDb } from "../lib/prismaTools";

export default function ListSwitch() {
  const { setAddToList, Artist, addToList, setOpenModal } = useContext(AppContext)! as IContext;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAddToList(checked);
    if (Artist) {
      Artist.saved = checked;
    }
    setTimeout(() => {
      setAddToList(prev => !prev)
    }, 400);
    const ModalResponse = await AddArtistToDb(Artist);
    if(!ModalResponse){
      document.body.style.overflow = "hidden"
      setOpenModal(ModalResponse)
    }
  };

  useEffect(() => {
    
  }, [Artist]);

  return (
    <div className="flex flex-row space-x-5 items-center z-10">
      <h4 className="text-sm mb-2 text-TextColor">Add To List</h4>
      <label className="switch relative cursor-pointer">
        <input
          name="AddToList"
          onChange={handleChange}
          checked={addToList}
          className="sr-only peer"
          type="checkbox"
        />
        <div className="after:z-10 w-[55px] h-[25px] rounded-full bg-white hover:bg-white peer-checked:bg-componentGreyHover transition-all duration-300 ease-in-out after:w-[18px] after:h-[18px] after:bg-black after:rounded-full after:absolute after:top-1 after:left-1 after:transition-all after:duration-500 after:ease-in-out after:peer-checked:translate-x-[26px] after:peer-checked:bg-white"></div>
      </label>
    </div>
  );
}
