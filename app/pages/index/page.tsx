import ArtistComponent from "../../Artist/ArtistComponent";
import Albums from "../../ArtistAlbums/Albums";
import Artists from "../../FollowList/Artists";
import NavbarComponent from "../../NavbarFolder/NavbarComponent";

export default function Home() {
  return (
    <div>
      <div className="space-y-8 ml-12">
        <NavbarComponent />
        <ArtistComponent />
        <Albums />
      </div>
      <div className="fixed h-[33em] top-0 right-0">
        <Artists />
      </div>
    </div>
  );
}
