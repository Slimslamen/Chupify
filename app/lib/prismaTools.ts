'use server'
import { IAlbumData, IArtist } from "../Interfaces/types";
import prisma from "./prisma";

export async function AddArtistToDb(Artist : IArtist | undefined, Album : IAlbumData | undefined){
    while (!Artist) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    while (!Album) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    console.log(Artist);
     await prisma.followArtist.create({
      data: {
        created: Album.release_date,
        artist_name: Artist.name,
        artist_id: Artist.id,
        artist_uri: Artist.uri
      }
    })
  }

export async function GetArtistFromDb(){

}