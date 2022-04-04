import { LootTable } from "../types/ItemTypes";
import { treasureTable_tier1 } from "./treasureTables/treasureTable_tier1";
import { treasureTable_tier2 } from "./treasureTables/treasureTable_tier2";
import { treasureTable_tier3 } from "./treasureTables/treasureTable_tier3";


export const treasureLootTable: LootTable[] = [
  {
    name: "Levels 1 to 3",
    table: treasureTable_tier1,
  },
  {
    name: "Levels 4 to 6",
    table: treasureTable_tier2,
  },
  {
    name: "Levels 7 to 9",
    table: treasureTable_tier3,
  },
  {
    name: "Levels 10 to 12",
    table: [
      {
        name: "",
        description: "",
      },
    ],
  },
  {
    name: "Levels 13 to 15",
    table: [
      {
        name: "",
        description: "",
      },
    ],
  },
  {
    name: "Levels 16 to 18",
    table: [
      {
        name: "",
        description: "",
      },
    ],
  },
  {
    name: "Levels 19 to 20",
    table: [
      {
        name: "",
        description: "",
      },
    ],
  },
];

