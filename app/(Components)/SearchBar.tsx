import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center w-96 h-16 bg-componentGrey rounded-lg">
        <input type="text" className="w-[85%] py-1 bg-white rounded-lg text-black px-5" placeholder="Searchbar"/>
    </div>
  )
}
