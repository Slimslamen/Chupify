import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

export default function NavbarComponent() {
  return (
    <div className=" flex flex-row space-x-10 items-center justify-start">
      <Logo />
      <SearchBar />
    </div>
  )
}
