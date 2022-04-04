import { treasureLootTable } from "../../lootTables/lootTables";
import { Item } from "../../types/ItemTypes";

export const getLevelRangeIndex = function (input: number) {
    let index = 0;
    input < 4 ? (index = 0) : input < 7 ? (index = 1) : input < 10 ? (index = 2) : input < 13 ? (index = 3) : input < 16 ? (index = 4) : input < 19 ? (index = 5) : (index = 6);
    return index;
  };
  export function generateRandomItem(lootTable: Item[]) {
    const keys = Object.keys(lootTable);
    const randomIndex = (keys.length * Math.random()) << 0;
    const randomItem = lootTable[randomIndex];
    return randomItem;
  };
  
  export const generateRandomTreasure = (levelIndex: number) => {
    let treasure = generateRandomItem(treasureLootTable[levelIndex].table);
    let treasureList: Item[] = [];
    treasureList.push(treasure);
    return treasureList;
  
  };
  