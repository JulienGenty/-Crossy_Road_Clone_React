import { rows } from "../metadata.ts";
import { Grass } from "./Grass.tsx";
import { Row } from "./Row.tsx";

export function Map() {
  return (
    <>
      <Grass rowIndex={0} />
      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  );
}
