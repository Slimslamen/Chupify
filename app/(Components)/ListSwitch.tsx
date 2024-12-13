import React from "react";

export default function ListSwitch() {
  return (
    <label className="switch relative cursor-pointer">
      <input className="sr-only peer" type="checkbox" />
      <div className="after:z-10 w-[55px] h-[25px] rounded-full bg-white hover:bg-white peer-checked:bg-componentGreyHover transition-all duration-300 ease-in-out after:w-[18px] after:h-[18px] after:bg-black after:rounded-full after:absolute after:top-1 after:left-1 after:transition-all after:duration-500 after:ease-in-out after:peer-checked:translate-x-[28px] after:peer-checked:bg-white"></div>
    </label>
  );
}
