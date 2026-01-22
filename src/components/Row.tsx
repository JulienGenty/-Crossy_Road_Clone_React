import type { Row } from "../types.ts";
import { Forest } from "./Forest.tsx";

type Props = {
  rowIndex: number;
  rowData: Row;
};

export function Row({ rowIndex, rowData }: Props) {
  switch (rowData.type) {
    case "forest": {
      return <Forest rowIndex={rowIndex} rowData={rowData} />;
    }
  }
}
