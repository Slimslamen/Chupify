import Image from "next/image";
import React from "react";

interface Iprops {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export default function ArtistImage({ src, alt, height, width }: Iprops) {
  return (
    <div>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
