import { Hotel } from "./hotel.model";

export interface Country {
  id: number;
  name: string;
  shortName: string;
  hotels: Hotel[];
}
