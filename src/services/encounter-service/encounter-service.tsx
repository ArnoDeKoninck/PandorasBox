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

//randomizes variable encounter parameters (such as amount of monsters encountered) and returns a new encounter object to use
export const randomizeEncounterVariables = (encounter: Encounter) => {
	const variants = encounter.variant ?? undefined;
	const randomizedVariant = variants ? variants[Math.floor(Math.random() * variants.length)] : undefined;

	const randomizedEncounter: Encounter = randomizedVariant
		? {
				name: randomizedVariant.name,
				description: randomizedVariant.description,
				image: randomizedVariant.image ?? undefined,
				amount: Math.floor(Math.random() * (randomizedVariant.maxAmount ?? 1) + (randomizedVariant.minAmount ?? +1)),
				monster: randomizedVariant.monster ?? undefined,
				savingThrow: randomizedVariant.savingThrow ?? undefined,
				dc: randomizedVariant.dc ?? undefined,
		  }
		: {
				name: encounter.name,
				description: encounter.description,
				image: encounter.image ?? undefined,
				amount: Math.floor(Math.random() * (encounter.maxAmount ?? 1) + (encounter.minAmount ?? +1)),
				monster: encounter.monster ?? undefined,
				savingThrow: encounter.savingThrow ?? undefined,
				dc: encounter.dc ?? undefined,
		  };
	return randomizedEncounter;
};
