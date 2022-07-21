import { Grid, TextField } from "@mui/material";
import { Classes, Entity } from "../../../../types/GlobalTypes";

interface Props {
	entity: Entity;
	level: number;
	resources: number[];
	setResources: (input: number[]) => void;
}

function ClassResource({ entity, level, resources, setResources }: Props) {
	return <>{getResourceUI(entity, level, resources, setResources)}</>;
}

export default ClassResource;

function getResourceUI(entity: Entity, level: number, resources: number[], setResources: (input: number[]) => void) {
	const handleChangeResource = (input: number, indexNumber: number) => {
		setResources(resources.map((resource, index) => (index === indexNumber ? input : resource)));
	};
	switch (entity.class) {
		case Classes.ARTIFICER:
			return (
				<Grid>
					{resources.map((level, index) => (
						<TextField
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							label={index + 1}
							value={level}
							onChange={(e: any) => {
								handleChangeResource(e.target.value as number, index);
							}}
						/>
					))}
				</Grid>
			);
		case Classes.BARBARIAN:
			return (
				<Grid container>
					{resources.map((level, index) => (
						<Grid item xs={2}>
							<TextField
								inputProps={{ min: 0, style: { textAlign: "center" } }}
								label={"Rage"}
								value={resources}
								onChange={(e: any) => {
									handleChangeResource(e.target.value as number, index);
								}}
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

	//Spellslots are saved in an array where the first value is the level, paired to an array of the available spellslots per spellslotlevel
	//e.g {10: [4,3,2]} means at lvl 10 this class has 4 first level spell slots, 3 second level spell slots and 2 third level spell slots

	switch (entityClass) {
		case Classes.ARTIFICER:
			return artificerSpellSlots[level - 1];
		case Classes.BARBARIAN:
			return barbarianRage[level - 1];
		default:
			return [0];
	}
}
