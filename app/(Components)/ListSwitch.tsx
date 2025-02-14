import React, { useContext } from "react";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";

export default function ListSwitch() {

  const { setAddToList } = useContext(AppContext)! as IContext;


  return (
    <div className="flex flex-row space-x-5 items-center">
      <h4 className="text-sm mb-2 text-TextColor">Add To List</h4>
      <label className="switch relative cursor-pointer">
        <input name="AddToList" onChange={(e) => setAddToList(e.target.checked)} className="sr-only peer" type="checkbox" defaultChecked={false}/>
        <div className="after:z-10 w-[55px] h-[25px] rounded-full bg-white hover:bg-white peer-checked:bg-componentGreyHover transition-all duration-300 ease-in-out after:w-[18px] after:h-[18px] after:bg-black after:rounded-full after:absolute after:top-1 after:left-1 after:transition-all after:duration-500 after:ease-in-out after:peer-checked:translate-x-[26px] after:peer-checked:bg-white"></div>
      </label>
    </div>
  );
}
