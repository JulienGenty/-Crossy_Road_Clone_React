import type { Row } from "../types.ts";
import { Grass } from "./Grass.tsx";
import { Tree } from "./Tree.tsx";

type Props = {
  rowIndex: number;
  rowData: Extract<Row, { type: "forest" }>;
};

export function Forest({ rowIndex, rowData }: Props) {
  return (
    <Grass rowIndex={rowIndex}>
      {rowData.tress.map((tree, index) => (
        <Tree key={index} tileIndex={tree.tileIndex} height={tree.height} />
      ))}
    </Grass>
  );
}
