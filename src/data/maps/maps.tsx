import { Maps } from "../../types/GlobalTypes";
import { BaroviaLocations } from "../MapLocations/Barovia/BaroviaLocation";
import { DeathHouseLocations } from "../MapLocations/DeathHouse/DeathHouseLocations";
import { VillageOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/VillageOfBarovia";
export const AllMaps: Maps[] = [
	{ name: "Barovia", img: "/images/Barovia_WorldMap.webp", locations: BaroviaLocations },
	{ name: "Death House", img: "/images/deathhouse_map.webp", locations: DeathHouseLocations },
	{ name: "The Village of Barovia", img: "/images/village_of_barovia.webp", locations: VillageOfBaroviaLocations },
];
