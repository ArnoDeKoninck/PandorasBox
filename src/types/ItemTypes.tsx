export interface Item {
    name: string;
    description?: string;
    variant?: Item_variant[];
    spellScroll?: boolean;
    weight?: string;
    uses?: number;
    link?: string;
    amount?: number
  }
  export interface Item_variant extends Item {
    name: string;
  }
  export interface LootTable {
    name: string;
    table: Item[];
  }