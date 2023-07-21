import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import EduChip from "./Stuff/EduChip";
import Data from "../lang/en.json";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Education() {
  return (
    <Box sx={{ flexGrow: 1, spacing: 2, m: 2 }}>
      {Data.Education.map((Item, index) => (
        <Box key={index} sx={{ display: "inline-block", spacing: 2, mx: 2 }}><EduChip passData={Item} />
        </Box>
      ))}
    </Box>
  );
}
