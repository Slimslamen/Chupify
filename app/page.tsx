import ArtistComponent from "./Artist/ArtistComponent";
import Albums from "./ArtistAlbums/Albums";
import Artists from "./FollowList/Artists";
import NavbarComponent from "./NavbarFolder/NavbarComponent";

export default function Home() {
  return (
    <div>
      <div className="fixed top-5 left-20 space-y-4">
        <NavbarComponent />
        <ArtistComponent />
        <Albums />
      </div>
      <div className="fixed h-[46.2em] top-0 right-0">
        <Artists />
      </div>
    </div>
  );
}
