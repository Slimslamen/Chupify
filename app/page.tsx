import ArtistComponent from "./Artist/ArtistComponent";
import Artists from "./FollowList/Artists";
import NavbarComponent from "./NavbarFolder/NavbarComponent";

export default function Home() {
  return (
    <div className="grid grid-cols-4 items-center justify-items-center">
      <div className="space-y-10 col-span-3 w-full">
        <NavbarComponent />
        <ArtistComponent />
      </div>
      <div className="col-span-1 h-full w-full items-end justify-end">
        <Artists />
      </div>
    </div>
  );
}
