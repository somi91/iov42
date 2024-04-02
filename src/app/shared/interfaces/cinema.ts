import { IScreen } from "./screen";

export interface Cinema {
  id: number;
  name: string;
  screens: IScreen[];
}