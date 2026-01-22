import { tileSize } from "../constants.ts";

type Props = {
  tileIndex: number;
  height: number;
};

export const Tree = ({ tileIndex, height }: Props) => {
  return (
    <group position-x={tileIndex * tileSize}>
      <mesh position-z={height / 2 + 20}>
        <boxGeometry args={[30, 30, height]} />
        <meshLambertMaterial color={0x7aa21d} flatShading />
      </mesh>
      <mesh>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0x4d2926} flatShading />
      </mesh>
    </group>
  );
};
