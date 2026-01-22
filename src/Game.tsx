import { Scene } from "./components/Scene.tsx";
import { Player } from "./components/Player.tsx";
import { Map } from "./components/Map.tsx";

export default function Game() {
  return (
    <Scene>
      <Player />
      <Map />
    </Scene>
  );
}
