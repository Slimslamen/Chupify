import React from 'react'
import Logo from '../(Components)/Logo'
import SearchBar from '../(Components)/SearchBar'

export default function NavbarComponent() {
  return (
    <div className="flex flex-row space-x-32">
      <Logo />
      <SearchBar />
    </div>
  )
}
