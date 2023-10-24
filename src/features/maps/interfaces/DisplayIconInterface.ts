import { ReactNode } from "react";
import { LayerType } from "../types/mapTypes";

interface DisplayIconInterface {
  icon: ReactNode;
  name: string;
  layer: LayerType;
}

export default DisplayIconInterface;
