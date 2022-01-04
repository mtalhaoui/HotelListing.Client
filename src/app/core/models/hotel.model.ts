import { Country } from "./country.model";

export interface Hotel {
  id: number;
  name: string;
  address: string;
  rating: number;
  countryId: string;
  image: string;
  country: Country;
}
