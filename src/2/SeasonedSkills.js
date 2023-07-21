import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import SkillChip from "./Stuff/SkillChip";
import Data from "../lang/en.json";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SeasonedSkills() {
  return (
    <Box sx={{ flexGrow: 1, spacing: 2, m: 2 }}>
      {Data.Skills.seasonedSkills.map((Item, index) => (
        <Box key={index} sx={{ display: "inline-block", spacing: 1, mx: 0.3 }}><SkillChip passData={Item} />
        </Box>
      ))}
    </Box>
  );
}
