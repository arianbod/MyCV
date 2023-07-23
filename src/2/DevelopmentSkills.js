import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Data from "../lang/en.json";
import SkillStuff from './Stuff/Skill'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ResponsiveGrid() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>

      <Grid container spacing={{ xs: 0 }}>
        {Data.Skills.Development.map((SkillItem, index) => (
          <Grid key={index} xs={12} md={6} >
            <SkillStuff passData={SkillItem} />
          </Grid>
        )
        )}
      </Grid>

    </>

  );
}
