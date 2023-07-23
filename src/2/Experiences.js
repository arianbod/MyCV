import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Data from "../lang/en.json";
import ExperienceCEO from './Stuff/ExperienceCEO';
import ExOthers from './Stuff/ExOthers';
import ExFreelance from './Stuff/ExFreelance';
import ExperienceFrontend from './Stuff/ExperienceFrontend';


export default function ResponsiveGrid() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Typography variant="h4">
        Work History
      </Typography>
      <ExperienceCEO />
      <ExperienceFrontend />
      <ExFreelance />
      <ExOthers />
    </>

  );
}
