import { Maps } from "../../types/GlobalTypes";
import { BaroviaLocations } from "../MapLocations/Barovia/BaroviaLocation";
import { ChurchOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/ChurchOfBarovia";
import { DeathHouseLocations } from "../MapLocations/DeathHouse/DeathHouseLocations";
import { VillageOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/VillageOfBarovia";
import { TserPoolEncampmentLocations } from "../MapLocations/TserPoolEncampment/TserPoolEncampment";
export const AllMaps: Maps[] = [
	{ name: "Barovia", img: "/images/barovia_worldmap.webp", locations: BaroviaLocations },
	{ name: "Death House", img: "/images/deathhouse_map.webp", locations: DeathHouseLocations },
	{ name: "The Village of Barovia", img: "/images/town_of_barovia.webp", locations: VillageOfBaroviaLocations },
	{ name: "Church Of Barovia", img: "/images/church_of_barovia.webp", locations: ChurchOfBaroviaLocations },
	{ name: "Tser Pool Encampment", img: "/images/tser_pool_encampment.webp", locations: TserPoolEncampmentLocations },
];
