import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Technologies from "./Technologies";
import Experiences from "./Experiences";
import Education from "./Education";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid xs={12} sm={8} md={8}>
                    <Technologies />
                </Grid>
                <Grid xs={12} sm={4} md={2}>
                    <Experiences />
                </Grid>
                <Grid xs={12} sm={4} md={2}>
                    <Education />
                </Grid>
            </Grid>
        </Box>
    );
}