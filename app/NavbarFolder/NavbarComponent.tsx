import React from 'react'
import Logo from '../(Components)/Logo'
import SearchBar from '../(Components)/SearchBar'

export default function NavbarComponent() {
  return (
    <div className=" flex flex-row space-x-10 items-center justify-start">
      <Logo />
      <SearchBar />
    </div>
  )
}
