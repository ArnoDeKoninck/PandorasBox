import { Maps } from "../../types/GlobalTypes";
import { BaroviaLocations } from "../MapLocations/Barovia/BaroviaLocation";
import { ChurchOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/ChurchOfBarovia";
import { DeathHouseLocations } from "../MapLocations/DeathHouse/DeathHouseLocations";
import { VillageOfBaroviaLocations } from "../MapLocations/VillageOfBarovia/VillageOfBarovia";
import { TserPoolEncampmentLocations } from "../MapLocations/TserPoolEncampment/TserPoolEncampment";
import { OldBonegrinderLocations } from "../MapLocations/OldBonegrinder/OldBonegrinder";
import { CR_FirstFloorLocations } from "../MapLocations/CastleRavenloft/CR_FirstFloor";
import { CR_OutsideLocations } from "../MapLocations/CastleRavenloft/CR_Outside";
import { CR_SecondFloorLocations } from "../MapLocations/CastleRavenloft/CR_SecondFloor";
import { CR_ThirdFloorLocations } from "../MapLocations/CastleRavenloft/CR_ThirdFloor";
import { Vallaki_VistaniCampLocations } from "../MapLocations/Vallaki/VallakiVistaniCamp";

export const AllMaps: Maps[] = [
	{ name: "Barovia", img: "/images/barovia_worldmap.webp", locations: BaroviaLocations },
	{ name: "Death House", img: "/images/deathhouse_map.webp", locations: DeathHouseLocations },
	{ name: "The Village of Barovia", img: "/images/town_of_barovia.webp", locations: VillageOfBaroviaLocations },
	{ name: "Church Of Barovia", img: "/images/church_of_barovia.webp", locations: ChurchOfBaroviaLocations },
	{ name: "Tser Pool Encampment", img: "/images/tser_pool_encampment.webp", locations: TserPoolEncampmentLocations },
	{ name: "Old Bonegrinder", img: "/images/old_bonegrinder.webp", locations: OldBonegrinderLocations },
	{ name: "Castle Ravenloft", img: "/images/cr_outside.webp", locations: CR_OutsideLocations },
	{ name: "Vallaki Vistani Camp", img: "/images/vallaki_vistani_camp.jpg", locations: Vallaki_VistaniCampLocations },
];

export const CastleRavenloftMaps: Maps[] = [
	{ name: "Outside", img: "/images/cr_outside.webp", locations: CR_OutsideLocations },
	{ name: "First Floor", img: "/images/cr_first_floor.webp", locations: CR_FirstFloorLocations },
	{ name: "Second Floor", img: "/images/cr_second_floor.webp", locations: CR_SecondFloorLocations },
	{ name: "Third Floor", img: "/images/cr_third_floor.webp", locations: CR_ThirdFloorLocations },
];
