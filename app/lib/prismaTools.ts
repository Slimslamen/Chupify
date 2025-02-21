'use server'
import { IArtist } from "../Interfaces/types";
import prisma from "./prisma";

export async function AddArtistToDb(Artist : IArtist | undefined){
    while (!Artist) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const existingArtist = await prisma.followArtist.findUnique({
      where: { id: Artist.id }
    });

    if (existingArtist) {
      return false;
    }
    
    await prisma.followArtist.create({
      data: {
        id : Artist.id,
        artist_name: Artist.name,
        image: Artist.images[0].url
      }
    });
    return true;
}

export async function GetArtistFromDb(){
    const allArtists = await prisma.followArtist.findMany();
    console.log("All Artists", allArtists);
    return allArtists;
}

export async function DeleteArtistFromDb(artistId: string){
  const deleteUser = await prisma.followArtist.delete({
    where: {
        id: artistId
    }
  });
  console.log("Deleted ", deleteUser);
}