import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Data from "../../lang/en.json";
import ExperienceStuff from './Experience'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ExperienceCEO() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            2Y CEO
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} variant="body2"></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid xs={12} sm={12} xl={12} >
                <ExperienceStuff passData={Data.WorkHistory.CEO[0]} />
              </Grid>

            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>

  );
}
