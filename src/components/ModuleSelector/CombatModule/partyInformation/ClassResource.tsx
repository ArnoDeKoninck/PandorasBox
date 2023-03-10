import { Grid, TextField, Typography } from "@mui/material";
import { useAppSelector } from "src/app/hooks";

import { Classes, Entity } from "../../../../types/GlobalTypes";

interface Props {
	entity: Entity;
	resources: number[];
	setResources: (input: number[]) => void;
}

function ClassResource({ entity, resources, setResources }: Props) {
	const partyLevel = useAppSelector((state) => state.party.partyLevel);

	return <>{getResourceUI(entity, partyLevel, resources, setResources)}</>;
}

export default ClassResource;

function getResourceUI(entity: Entity, level: number, resources: number[], setResources: (input: number[]) => void) {
	const handleChangeResource = (input: number, indexNumber: number) => {
		setResources(resources.map((resource, index) => (index === indexNumber ? input : resource)));
	};
	switch (entity.class) {
		case Classes.BARBARIAN:
			return (
				<TextField
					inputProps={{ min: 0, style: { textAlign: "center", width: "2rem", height: "2rem", padding: 0 } }}
					label="Rage"
					value={entity.resources}
					onChange={(e: any) => {
						handleChangeResource(e.target.value as number, 1);
					}}
					key={`${"Rage value"}`}
				/>
			);
		default:
			return (
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography>{getClassResources(entity.class!, level).title}</Typography>
					</Grid>

					{resources.map((amount, index) => (
						<Grid item key={`${entity.name} Resource ${index + 1}`}>
							<TextField
								inputProps={{ min: 0, style: { textAlign: "center", width: "2rem", height: "2rem", padding: 0 } }}
								label={index + 1}
								value={amount}
								onChange={(e: any) => {
									handleChangeResource(e.target.value as number, index);
								}}
								size="small"
							/>
						</Grid>
					))}
				</Grid>
			);
	}
}
export function getClassResources(entityClass: Classes | string, level: number) {
	//Resources are saved in an array where the first value is the level, paired to an array of the maximum value of the ability (casts or healing value for example)
	//e.g {10: [4]}  for barbarian means at lvl 10 this class has a maximum of 4 uses of their Rage class ability

	const artificerSpellSlots = [
		//Lvl 1
		[2],
		//lvl 2
		[2],
		//lvl 3
		[3],
		//lvl 4
		[3],
		//lvl 5
		[4, 2],
		//lvl 6
		[4, 2],
		//lvl 7
		[4, 3],
		//lvl 8
		[4, 3],
		//lvl 9
		[4, 3, 2],
		//lvl 10
		[4, 3, 2],
		//lvl 11
		[4, 3, 3],
		//lvl 12
		[4, 3, 3],
		//lvl 13
		[4, 3, 3, 1],
		//lvl 14
		[4, 3, 3, 1],
		//lvl 15
		[4, 3, 3, 2],
		//lvl 16
		[4, 3, 3, 2],
		//lvl 17
		[4, 3, 3, 3, 1],
		//lvl 18
		[4, 3, 3, 3, 1],
		//lvl 19
		[4, 3, 3, 3, 2],
		//lvl 20
		[4, 3, 3, 3, 2],
	];

	const barbarianRage = [
		//lvl 1
		[2],
		//lvl 2
		[2],
		//lvl 3
		[3],
		//lvl 4
		[3],
		//lvl 5
		[3],
		//lvl 6
		[4],
		//lvl 7
		[4],
		//lvl 8
		[4],
		//lvl 9
		[4],
		//lvl 10
		[4],
		//lvl 11
		[4],
		//lvl 12
		[5],
		//lvl 13
		[5],
		//lvl 14
		[5],
		//lvl 15
		[5],
		//lvl 16
		[5],
		//lvl 17
		[6],
		//lvl 18
		[6],
		//lvl 19
		[6],
		//lvl 20 -infinite
		[99],
	];

	const casterSpellSlots = [
		//Lvl 1
		[2],
		//lvl 2
		[3],
		//lvl 3
		[4, 2],
		//lvl 4
		[4, 3],
		//lvl 5
		[4, 3, 2],
		//lvl 6
		[4, 3, 3],
		//lvl 7
		[4, 3, 3, 1],
		//lvl 8
		[4, 3, 3, 2],
		//lvl 9
		[4, 3, 3, 3, 1],
		//lvl 10
		[4, 3, 3, 3, 2],
		//lvl 11
		[4, 3, 3, 3, 2, 1],
		//lvl 12
		[4, 3, 3, 3, 2, 1],
		//lvl 13
		[4, 3, 3, 3, 2, 1, 1],
		//lvl 14
		[4, 3, 3, 3, 2, 1, 1],
		//lvl 15
		[4, 3, 3, 3, 2, 1, 1, 1],
		//lvl 16
		[4, 3, 3, 3, 2, 1, 1, 1],
		//lvl 17
		[4, 3, 3, 3, 2, 1, 1, 1, 1],
		//lvl 18
		[4, 3, 3, 3, 3, 1, 1, 1, 1],
		//lvl 19
		[4, 3, 3, 3, 3, 2, 1, 1, 1],
		//lvl 20
		[4, 3, 3, 3, 3, 2, 2, 1, 1],
	];

	const monkKiPoints = [
		//lvl 1
		[0],
		//lvl 2
		[2],
		//lvl 3
		[3],
		//lvl 4
		[4],
		//lvl 5
		[5],
		//lvl 6
		[6],
		//lvl 7
		[7],
		//lvl 8
		[8],
		//lvl 9
		[9],
		//lvl 10
		[10],
		//lvl 11
		[11],
		//lvl 12
		[12],
		//lvl 13
		[13],
		//lvl 14
		[14],
		//lvl 15
		[15],
		//lvl 16
		[16],
		//lvl 17
		[17],
		//lvl 18
		[18],
		//lvl 19
		[19],
		//lvl 20
		[20],
	];

	const martialSpellSlots = [
		//Lvl 1
		[0],
		//lvl 2
		[2],
		//lvl 3
		[3],
		//lvl 4
		[3],
		//lvl 5
		[4, 2],
		//lvl 6
		[4, 2],
		//lvl 7
		[4, 3],
		//lvl 8
		[4, 3],
		//lvl 9
		[4, 3, 2],
		//lvl 10
		[4, 3, 2],
		//lvl 11
		[4, 3, 3],
		//lvl 12
		[4, 3, 3],
		//lvl 13
		[4, 3, 3, 1],
		//lvl 14
		[4, 3, 3, 1],
		//lvl 15
		[4, 3, 3, 2],
		//lvl 16
		[4, 3, 3, 2],
		//lvl 17
		[4, 3, 3, 3, 1],
		//lvl 18
		[4, 3, 3, 3, 1],
		//lvl 19
		[4, 3, 3, 3, 2],
		//lvl 20
		[4, 3, 3, 3, 2],
	];

	const warlockSpellSlots = [
		//Lvl 1
		[1],
		//lvl 2
		[2],
		//lvl 3
		[2],
		//lvl 4
		[2],
		//lvl 5
		[2],
		//lvl 6
		[2],
		//lvl 7
		[2],
		//lvl 8
		[2],
		//lvl 9
		[2],
		//lvl 10
		[2],
		//lvl 11
		[3],
		//lvl 12
		[3],
		//lvl 13
		[3],
		//lvl 14
		[3],
		//lvl 15
		[3],
		//lvl 16
		[3],
		//lvl 17
		[4],
		//lvl 18
		[4],
		//lvl 19
		[4],
		//lvl 20
		[4],
	];

	//Spellslots are saved in an array where the first value is the level, paired to an array of the available spellslots per spellslotlevel
	//e.g {10: [4,3,2]} means at lvl 10 this class has 4 first level spell slots, 3 second level spell slots and 2 third level spell slots

	switch (entityClass) {
		case Classes.ARTIFICER:
			return { resource: artificerSpellSlots[level - 1], title: "spellslots" };
		case Classes.BARBARIAN:
			return { resource: barbarianRage[level - 1], title: "rage" };
		case Classes.BARD:
			return { resource: casterSpellSlots[level - 1], title: "spellslots" };
		case Classes.CLERIC:
			return { resource: casterSpellSlots[level - 1], title: "spellslots" };
		case Classes.DRUID:
			return { resource: casterSpellSlots[level - 1], title: "spellslots" };
		case Classes.MONK:
			return { resource: monkKiPoints[level - 1], title: "Ki points" };
		case Classes.PALADIN:
			return { resource: martialSpellSlots[level - 1], title: "spellslots" };
		case Classes.RANGER:
			return { resource: martialSpellSlots[level - 1], title: "spellslots" };
		case Classes.SORCERER:
			return { resource: casterSpellSlots[level - 1], title: "spellslots" };
		case Classes.WARLOCK:
			return { resource: warlockSpellSlots[level - 1], title: "spellslots" };
		case Classes.WIZARD:
			return { resource: casterSpellSlots[level - 1], title: "spellslots" };
		default:
			return { resource: [0] };
	}
}
