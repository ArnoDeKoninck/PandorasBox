export interface Encounter {
    name: string;
    variant?: Encounter_Variant[];
    description?: string;
    savingThrow?: string;
    dc?: number;
    minAmount?: number;
    maxAmount?: number;
    amount?: number;
  }
  export interface Encounter_Variant extends Encounter {
    name: string;
  }