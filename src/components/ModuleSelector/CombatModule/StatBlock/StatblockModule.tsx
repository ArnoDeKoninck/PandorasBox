import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Entity, StatBlock, Status } from "../../../../types/GlobalTypes";
import HealthBarControls from "../HealthBar/HealthBarControls";
import SetStatus from "../Status/SetStatus";
import StatusChip from "../Status/StatusChip";

interface StatBlockProps {
	entity: Entity;
	onChange: (input: Entity) => void;
}

function StatBlockModule({ entity, onChange }: StatBlockProps) {
	const [currentHp, setCurrentHp] = React.useState<number>(entity.currentHealth);
	const [tempHp, setTempHp] = React.useState<number>(entity.tempHealth ?? 0);
	const [currentStatus, setCurrentStatus] = React.useState<Status[]>(entity.status);
	const [initiative, setInitiative] = React.useState<number>(entity.initiative);

	useEffect(() => {
		if (entity.type === "Monster") {
			const currentEnemy = entity;
			currentEnemy.currentHealth = currentHp;
			currentEnemy.tempHealth = tempHp;
			currentEnemy.status = currentStatus;
			currentEnemy.initiative = initiative;
			onChange(currentEnemy);
		}
	}, [currentHp, tempHp, currentStatus, initiative]);

	const removeStatus = (statusToRemove: Status) => {
		const newStatusArray = currentStatus.filter((status) => status !== statusToRemove);
		setCurrentStatus(newStatusArray);
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				<Grid container alignItems="center" columnSpacing={2} rowSpacing={2}>
					<Grid item xs={7}>
						<HealthBarControls currentHp={currentHp} tempHp={tempHp} maxHealth={entity.maxHealth} onCurrentHpChange={setCurrentHp} onTempChange={setTempHp} />
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
						</Grid>
					</Grid>
					<Grid item xs={1}>
						<TextField
							inputProps={{ min: 0, style: { textAlign: "center" } }}
							label={"Initiative"}
							value={initiative}
							onChange={(e: any) => {
								setInitiative(e.target.value);
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default StatBlockModule;
