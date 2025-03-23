import React, { useContext, useState } from "react";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";

export default function SearchBar() {

  const [Search, setSearch] = useState<string>("")
  const { SearchForArtist } = useContext(AppContext)! as IContext;

  async function handleSubmit(e : React.FormEvent){
    e.preventDefault();
    const res = await SearchForArtist(Search)
    console.log("Searched ",res)
  }
  return (
    <div>
      <form className="form relative" onSubmit={handleSubmit}>
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1" type="submit">
          <svg
            width={17}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
            type="submit"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          className="input text-black rounded-full px-8 py-1 border-2 border-transparent focus:outline-none focus:border-componentGreyHover placeholder-gray-400 transition-all duration-300 shadow-md flex items-end"
          placeholder="Search..."
          required
          id="name"
          type="search"
          name="name"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
