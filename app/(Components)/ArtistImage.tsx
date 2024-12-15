import Image from "next/image";
import React from "react";

interface Iprops {
  src: string;
  alt: string;
  height: number;
  width: number;
  Radius: string;
}

export default function ArtistImage({ src, alt, height, width, Radius }: Iprops) {
  return (
    <div>
      <Image priority={width >= 150 ? true : false} src={src} alt={alt} height={height} width={width} style={{borderRadius:Radius}}/>
    </div>
  );
}
