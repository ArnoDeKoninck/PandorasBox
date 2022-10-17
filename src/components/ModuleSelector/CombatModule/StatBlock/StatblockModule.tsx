import { Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Entity, Status } from "../../../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";

interface StatBlockProps {
	entities: Entity[];
	index: number;
	onChange: (input: Entity) => void;
}

function StatBlockModule({ entities, index, onChange }: StatBlockProps) {
	const entity = entities[index];
	const [currentHp, setCurrentHp] = React.useState<number>(entity.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(entity.tempHealth ?? 0);
	const [currentStatus, setCurrentStatus] = React.useState<Status[]>(entity.status);
	const [initiative, setInitiative] = React.useState<number>(entity.initiative);

	useEffect(() => {
		if (entity.type === "Monster") {
			entities[index] = {
				...entities[index],
				...{
					currentHealth: currentHp,
					tempHealth: tempHp,
					status: currentStatus,
					initiative: initiative,
				},
			};
			onChange(entities[index]);
		}
	}, [currentHp, tempHp, currentStatus, initiative, entities, entity.type, index, onChange]);

	const removeStatus = (statusToRemove: Status) => {
		const newStatusArray = currentStatus.filter((status) => status !== statusToRemove);
		setCurrentStatus(newStatusArray);
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				<Grid container columnSpacing={2}>
					<Grid item xs={7}>
						<Grid container gap={2}>
							<Grid item xs={12}>
								<Typography sx={{ fontSize: "1rem" }}>{entity.name}</Typography>
								<Typography>{`${entity.size} ${entity.species}, ${entity.alignment}`}</Typography>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<Grid container gap={1}>
									<Typography>{`Armor Class: ${entity.ac}`}</Typography>
									<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={entity.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
									<Typography>{`Speed: ${entity.speed} ft.`}</Typography>
								</Grid>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<Grid container gap={1} justifyContent="space-around" paddingBottom={"1rem"}>
									{entity.statBlock.map((stat) => (
										<Grid item key={stat.name}>
											<Grid container direction={"column"}>
												<Typography textAlign={"center"}>{stat.name.toUpperCase()}</Typography>
												<Typography textAlign={"center"}>{`${stat.value}(${Math.floor((stat.value - 10) / 2) > 0 ? "+" : "-"}${Math.floor((stat.value - 10) / 2)})`}</Typography>
											</Grid>
										</Grid>
									))}
								</Grid>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<Grid container gap={1}>
									{entity.savingThrows && entity.savingThrows?.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Saving Throws:</Typography>
												<Typography>{entity.savingThrows?.join(", ")}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.skills && entity.skills.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Skills:</Typography>
												{entity.skills.map((skill, index) => (
													<Grid item key={skill.name}>
														<Typography>{`${skill.name}: +${skill.value}${index === entity.skills.length - 1 ? "" : ","}`}</Typography>
													</Grid>
												))}
											</Grid>
										</Grid>
									)}
									{entity.resistances && entity.resistances.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Resistances:</Typography>
												<Typography>{entity.resistances.join(", ")}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.senses && entity.senses.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Senses:</Typography>
												<Typography>{entity.senses.join(", ")}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.languages && entity.languages.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Languages:</Typography>
												<Typography>{entity.languages.join(", ")}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.cr && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography fontWeight={"bolder"}>Challenge Rating:</Typography>
												<Typography>{entity.cr}</Typography>
											</Grid>
										</Grid>
									)}
								</Grid>
								<Divider />
							</Grid>
							{entity.abilities && entity.abilities.length > 0 && (
								<Grid item xs={12}>
									<Grid container gap={"5px"}>
										{entity.abilities.map((ability) => (
											<Grid item key={ability.name}>
												<Typography fontWeight={"bolder"}>{ability.name}</Typography>
												<Typography>{ability.description}</Typography>
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.actions && entity.actions.length > 0 && (
								<Grid item xs={12}>
									<Typography fontWeight={"bolder"} fontSize="15px">
										Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.actions.map((action) => (
											<Grid item key={action.name}>
												<Typography fontWeight={"bolder"}>{action.name}</Typography>
												<Typography>{action.description}</Typography>
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.legendaryActions && entity.legendaryActions.length > 0 && (
								<Grid item xs={12}>
									<Typography fontWeight={"bolder"} fontSize="15px">
										Legendary Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.legendaryActions.map((legendaryAction) => (
											<Grid item key={legendaryAction.name}>
												<Typography fontWeight={"bolder"}>{legendaryAction.name}</Typography>
												<Typography>{legendaryAction.description}</Typography>
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.lairActions && entity.lairActions.length > 0 && (
								<Grid item xs={12}>
									<Typography fontWeight={"bolder"} fontSize="15px">
										Lair Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.lairActions.map((lairAction) => (
											<Grid item key={lairAction.name}>
												<Typography fontWeight={"bolder"}>{lairAction.name}</Typography>
												<Typography>{lairAction.description}</Typography>
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
						</Grid>
					</Grid>
					<Grid item xs={5}>
						<Grid container rowGap={4}>
							<Grid item xs={12}>
								<Typography>Status:</Typography>
								<Grid container>
									{currentStatus &&
										currentStatus.map(
											(status: Status) =>
												status !== Status.NONE && (
													<Grid item key={status}>
														<StatusChip removable onRemoveStatus={removeStatus} status={status} />
													</Grid>
												)
										)}
								</Grid>
							</Grid>
							<Grid item>
								<SetStatus status={currentStatus} onChangeStatus={setCurrentStatus} />
							</Grid>
							<Grid item xs={12}>
								<Grid container>
									<Grid item xs={2}>
										<TextField
											inputProps={{ min: 0, style: { textAlign: "center" } }}
											label={"Initiative"}
											value={initiative ?? 0}
											onChange={(e: any) => {
												setInitiative(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value));
											}}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default StatBlockModule;
