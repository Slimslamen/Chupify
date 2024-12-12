import React from 'react'
import ArtistTracks from './ArtistTracks'
import ArtistImage from '../(Components)/ArtistImage'

export default function ArtistComponent() {
  const imgsrc = "/mock.png";
  const altText = "Test";
  return (
    <div className="bg-componentGrey rounded-lg w-[55em] h-96">
        <ArtistImage src={imgsrc} alt={altText} height={200} width={200}/>
        <ArtistTracks />
    </div>
  )
}
