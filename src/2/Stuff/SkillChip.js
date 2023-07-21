import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

export default function ColorChips(props) {
    let dataColor;
    props.passData.Level === "Advanced" || props.passData.Level === "Native" ? dataColor = "success" : props.passData.Level === "Intermediate" ? dataColor = "secondary" : dataColor = "info"
    return (

        // <Badge badgeContent={props.passData.Level} color={dataColor} sx={{ p: 1 }}>
        <Chip label={props.passData.Skill} color={dataColor} variant="outlined" />
        // </Badge>

    );
}