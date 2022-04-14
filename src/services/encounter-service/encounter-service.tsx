import { getRandomValue } from "..";
import { dayTimeEncounterList } from "../../data/Encounters/Encounters";
import { Encounter } from "../../types/EncounterTypes";

export const getRandomEncounter = function (encounterList: Encounter[]) {
	const keys = Object.keys(encounterList);
	const randomIndex = (keys.length * Math.random()) << 0;
	const randomEncounter = dayTimeEncounterList[randomIndex];

	if (randomEncounter.variant) {
		const chosenVariant = randomEncounter.variant[getRandomValue(randomEncounter.variant.length)];
		if (chosenVariant.minAmount && chosenVariant.maxAmount) {
			chosenVariant.amount = getRandomValue(chosenVariant.minAmount, chosenVariant.maxAmount);
		}
		return chosenVariant;
	} else {
		if (randomEncounter.minAmount && randomEncounter.maxAmount) {
			randomEncounter.amount = getRandomValue(randomEncounter.minAmount, randomEncounter.maxAmount);
			return randomEncounter;
		}
	}
};
export function rollEncounter() {
	return getRandomEncounter(dayTimeEncounterList);
}
