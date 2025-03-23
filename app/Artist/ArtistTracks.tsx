import React, { useContext, useEffect, useState } from "react";
import PlayButton from "../(Components)/Buttons/PlayButton";
import { AppContext } from "../Context/SpotifyContext";
import { IContext } from "../Interfaces/types";
import ArtistImage from "../(Components)/ArtistImage";
import TrackSkeleton from "../(Components)/Skeletons/TrackSkeleton";

export default function ArtistTracks() {
  const { Fetch5MostPopularTracks, setTracks, Tracks, PlayTrack, Artist, SaveTrackToList } = useContext(AppContext)! as IContext;
  const [TrackLoad, setTrackLoad] = useState<boolean>(false);


  function handleHover(name :string){
    setTracks((Track) => 
      Track?.map((item) => ({...item, IsHovered: item.name === name ? !item.IsHovered : item.IsHovered})))
  }

  useEffect(() => {
    const GetSearchQuery = async () => {
      const res = await Fetch5MostPopularTracks();
      const filteredTracks = res.tracks.slice(0, 5).map((track) => ({...track, IsHovered:false}));
      if (res) {
        setTracks(filteredTracks);
      }
    };
    GetSearchQuery();
  }, []);

  useEffect(() => {
    if (Tracks) {
      setTrackLoad(true);
      console.log("Tracks",Tracks);    
      console.log("Artist",Artist)
    }
  }, [Tracks]);

  return (
    <div className="h-[17.5em] rounded-md flex flex-col py-6">
      {TrackLoad ? (
        <div className="space-y-4">
          {Tracks &&
            Tracks.map((track, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(track.name)}
                onMouseLeave={() => handleHover(track.name)}
                className={` text-TextColor flex flex-row justify-between items-center hover:bg-componentGreyHover py-2 px-3 rounded-lg transition ease-in-out delay-50`}
              >
                <div className="flex flex-row items-center space-x-5">
                  {track.IsHovered == false ? <p>{index + 1}</p> : <button onClick={() => PlayTrack(track.uri)}><PlayButton /></button>}
                  <div className="flex flex-row items-center text-white">
                    <div className="flex flex-row space-x-5 items-center">
                        <ArtistImage src={track.album.images[0].url} alt={track.album.name} height={48} width={48} Radius={"4px"} />
                      <h3>{track.name}</h3>
                    </div>
                  </div>
                </div>
                <h3>
                {track.IsHovered == false ?  `${Math.floor(track.duration_ms / 60000)}:${(Math.floor((track.duration_ms % 60000) / 1000) < 10 ? '0' : '') + Math.floor((track.duration_ms % 60000) / 1000)}`: <button onClick={() => SaveTrackToList(track.uri)} className="text-2xl mr-2 hover:text-white active:text-componentGreyHover">+</button>}
                  
                </h3>
              </div>
            ))}
        </div>
      )
      : <TrackSkeleton />}
    </div>
  );
}
