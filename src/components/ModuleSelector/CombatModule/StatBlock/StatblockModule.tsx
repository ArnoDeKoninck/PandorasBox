import { Divider, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/app/hooks";
import { Entity, Status } from "../../../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";

interface StatBlockProps {
	index: number;
	onChange: (input: Entity) => void;
}

function StatBlockModule({ index, onChange }: StatBlockProps) {
	const enemies = useAppSelector((state) => state.enemies.entities);
	const entity = enemies[index];

	const [updatedEntity, setUpdatedEntity] = useState<Entity>(entity);
	const [currentHp, setCurrentHp] = useState<number>(entity.currentHealth);
	const [tempHp, setTempHp] = useState<number>(entity.tempHealth ?? 0);
	const [currentStatus, setCurrentStatus] = useState<Status[]>(entity.status);
	const [initiative, setInitiative] = useState<string>(entity.initiative.toString());

	useEffect(() => {
		const updatedValues = { ...entity, ...{ currentHealth: currentHp, tempHealth: tempHp, status: currentStatus, initiative: parseInt(initiative) } };
		setUpdatedEntity(updatedValues);
		onChange(updatedValues);
	}, [currentHp, tempHp, currentStatus, initiative, entity.type, index, onChange, entity, updatedEntity]);

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
								<Typography component="span" sx={{ fontSize: "1rem" }}>
									{entity.name}
								</Typography>
								<Typography component="span">{`${entity.size} ${entity.species}, ${entity.alignment}`}</Typography>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<Grid container gap={1}>
									<Typography component="span">{`Armor Class: ${entity.ac}`}</Typography>
									<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={entity.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
									<Typography component="span">{`Speed: ${entity.speed} ft.`}</Typography>
								</Grid>
								<Divider />
							</Grid>
							<Grid item xs={12}>
								<Grid container gap={1} justifyContent="space-around" paddingBottom={"1rem"}>
									{entity.statBlock.map((stat, index) => (
										<Grid item key={index}>
											<Grid container key={`${index} container`} direction={"column"}>
												<Typography key={`${index} name`} component="span" textAlign={"center"}>
													{stat.name.toUpperCase()}
												</Typography>
												<Typography key={`${index} value`} component="span" textAlign={"center"}>{`${stat.value}(${Math.floor((stat.value - 10) / 2) > 0 ? "+" : "-"}${Math.floor((stat.value - 10) / 2)})`}</Typography>
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
												<Typography component="span" fontWeight={"bolder"}>
													Saving Throws:
												</Typography>
												<Typography component="span">{`${entity.savingThrows?.join(", ")}`}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.skills && entity.skills.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography component="span" fontWeight={"bolder"}>
													Skills:
												</Typography>
												{entity.skills.map((skill, index) => (
													<Grid item key={index}>
														<Typography key={`skillName ${index} `} component="span">{`${skill.name}: +${skill.value}${index === entity.skills.length - 1 ? "" : ","}`}</Typography>
													</Grid>
												))}
											</Grid>
										</Grid>
									)}
									{entity.resistances && entity.resistances.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography component="span" fontWeight={"bolder"}>
													Resistances:
												</Typography>
												<Typography component="span">{`${entity.resistances.join(", ")}`}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.senses && entity.senses.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography component="span" fontWeight={"bolder"}>
													Senses:
												</Typography>
												<Typography component="span">{`${entity.senses.join(", ")}`}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.languages && entity.languages.length > 0 && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography component="span" fontWeight={"bolder"}>
													Languages:
												</Typography>
												<Typography component="span">{`${entity.languages.join(", ")}`}</Typography>
											</Grid>
										</Grid>
									)}
									{entity.cr && (
										<Grid item xs={12}>
											<Grid container gap={"5px"}>
												<Typography component="span" fontWeight={"bolder"}>
													Challenge Rating:
												</Typography>
												<Typography component="span">{entity.cr}</Typography>
											</Grid>
										</Grid>
									)}
								</Grid>
								<Divider />
							</Grid>
							{entity.abilities && entity.abilities.length > 0 && (
								<Grid item xs={12}>
									<Grid container gap={"5px"}>
										{entity.abilities.map((ability, index) => (
											<Grid item key={index}>
												<Typography key={`abilityName ${index} `} component="span" fontWeight={"bolder"}>
													{ability.name}
												</Typography>
												{ability.description && <div>{ability.description.map((description) => description.props.children)}</div>}
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.actions && entity.actions.length > 0 && (
								<Grid item xs={12}>
									<Typography component="span" fontWeight={"bolder"} fontSize="15px">
										Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.actions.map((action, index) => (
											<Grid item key={index}>
												<Typography key={`actionName ${index} `} component="span" fontWeight={"bolder"}>
													{action.name}
												</Typography>
												{action.description && <div>{action.description.map((description) => description.props.children)}</div>}
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.legendaryActions && entity.legendaryActions.length > 0 && (
								<Grid item xs={12}>
									<Typography component="span" fontWeight={"bolder"} fontSize="15px">
										Legendary Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.legendaryActions.map((legendaryAction, index) => (
											<Grid item key={index}>
												<Typography key={`legendaryActionName ${index} `} component="span" fontWeight={"bolder"}>
													{legendaryAction.name}
												</Typography>
												<Typography key={`legendaryActionDescription ${index} `} component="span">
													{legendaryAction.description}
												</Typography>
											</Grid>
										))}
									</Grid>
									<Divider />
								</Grid>
							)}
							{entity.lairActions && entity.lairActions.length > 0 && (
								<Grid item xs={12}>
									<Typography component="span" fontWeight={"bolder"} fontSize="15px">
										Lair Actions
									</Typography>
									<Divider />
									<Grid container gap={"5px"}>
										{entity.lairActions.map((lairAction, index) => (
											<Grid item key={index}>
												<Typography key={`lairActionName ${index} `} component="span" fontWeight={"bolder"}>
													{lairAction.name}
												</Typography>
												<Typography key={`lairActionDescription ${index} `} component="span">
													{lairAction.description}
												</Typography>
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
								<Typography component="span">Status:</Typography>
								<Grid container>
									{currentStatus &&
										currentStatus.map(
											(status: Status, index) =>
												status !== Status.NONE && (
													<Grid item key={index}>
														<StatusChip key={`statusChip ${index} `} removable onRemoveStatus={removeStatus} status={status} />
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
											defaultValue={entity.initiative}
											onChange={(e: any) => {
												setInitiative(e.target.value);
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
