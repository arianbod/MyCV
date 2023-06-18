import React from "react";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Columns from '../2/Columns';
import Summary from '../2/Summary';
import Photo from '../assets/Cartoon.jpg'
import { BorderAllRounded } from "@mui/icons-material";
const Header = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Box>
        <img src={Photo} className="profilePhoto" />
      </Box>
      <Box>
        <header>
          <h1 class="header-3">Arian Bod</h1>
        </header>

      </Box>
      <Box>
        <Box>  <Summary /></Box>
        <Columns />
      </Box>
    </Container >
  );
};

export default Header;
