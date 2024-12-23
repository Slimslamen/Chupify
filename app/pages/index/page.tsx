import { SpotifyContext } from "@/app/Context/SpotifyContext";
import MainComponent from "@/app/main/MainComponent";

export default function Home() {
  return (
    <SpotifyContext>
      <MainComponent />
    </SpotifyContext>
  );
}
