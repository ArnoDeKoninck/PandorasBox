import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { customTheme, useStyles } from "../../customTheme";

interface props {
  partyLevel: number;
  partySize: number;
  setPartyLevel: (input: any) => void;
  setPartySize: (input: any) => void;
}
function PartyInformation({ partySize, partyLevel, setPartyLevel, setPartySize }: props) {
  const changePartyLevel = (event: any) => {
    setPartyLevel(event.target.value);
  };
  const changePartySize = (event: any) => {
    setPartySize(event.target.value);
  };
  const classes = useStyles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const maxLevel = 20;
  const maxPartySize = 8;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography color={customTheme.palette.secondary.light}>Party information</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={2} gap={4}>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel color="secondary" id="partyLevelLabel">
                Party Level
              </InputLabel>
              <Select
                className={classes.select}
                labelId="partyLevelLabel"
                id="partyLevel"
                value={partyLevel}
                label="Party Level"
                onChange={changePartyLevel}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                      width: 25,
                    },
                  },
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                }}
              >
                {[...Array(maxLevel)].map((each, level) => (
                  <MenuItem key={level} value={level + 1}>
                    {level + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel color="secondary" id="partySizeLabel">
                Party Size
              </InputLabel>
              <Select
                className={classes.select}
                labelId="partySizeLabel"
                id="partySize"
                value={partySize}
                label="Party Size"
                onChange={changePartySize}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                      width: 25,
                    },
                  },
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                }}
              >
                {[...Array(maxPartySize)].map((each, level) => (
                  <MenuItem key={level} value={level + 1}>
                    {level + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PartyInformation;
