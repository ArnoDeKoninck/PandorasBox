import { Maps } from "../../types/GlobalTypes";
import { BaroviaLocations } from "../MapLocations/Barovia/BaroviaLocation";
import { VillageOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/VillageOfBarovia";
export const AllMaps: Maps[] = [
	{ name: "Barovia", img: "/images/Barovia_WorldMap.webp", locations: BaroviaLocations },
	{ name: "The Village of Barovia", img: "/images/village_of_barovia.webp", locations: VillageOfBaroviaLocations },
];
