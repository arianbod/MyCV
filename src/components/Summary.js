import React from "react";
import { Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Typography variant="h5" gutterBottom>
        Summary
      </Typography>
      <Paper elevation={3} variant="outlined">
        <Typography variant="body1">
          {/* Add your summary text here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          malesuada tortor, ac dapibus mauris. Phasellus in rutrum nunc.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam congue gravida consequat. Aenean porta
          urna sit amet risus fringilla, at auctor nulla dictum.
        </Typography>
      </Paper>
    </section>
  );
};

export default Summary;
