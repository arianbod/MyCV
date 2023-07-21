import React from "react";
import Columns from './2/Columns';
import Summary from './2/Summary';
import PersonalInfo from "./2/PersonalInfo"
import Education from "./2/Education";
import Languages from "./2/Languages";
import SeasonedSkills from "./2/SeasonedSkills";
import { BorderAllRounded } from "@mui/icons-material";
import { Container, Box, Grid } from "@mui/material";
import Photo from './assets/Cartoon.jpg';
import DevelopmentSkills from "./2/DevelopmentSkills";
import MarketAnalyticsSkills from "./2/MarketAnalyticsSkills";
import SoftSkills from "./2/SoftSkills";
import Experiences from "./2/Experiences";

const CV = () => {
  return (
    <Container>
      <Grid container>

        <Grid item xs={12} sm={6} sx={{ m: 'auto' }}>
          <img src={Photo} className="profilePhoto" width={350} />
        </Grid>
        <Grid item xs={12} sm={6}>

          <PersonalInfo />
          <SeasonedSkills />

          <hr />
          <Education />
          <hr />
          <Languages />

        </Grid>

        <Grid item xs={12} sm={6}>
          <Summary />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <Columns />
        </Grid>
      </Grid>
    </Container >
  );
};

export default CV;
