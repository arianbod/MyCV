import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

export default function ColorChips(props) {
    let dataColor;
    props.passData.Level === "Fluent" || props.passData.Level === "Native" ? dataColor = "success" : props.passData.Level === "Intermediate" ? dataColor = "secondary" : dataColor = "info"
    return (

        <Badge badgeContent={props.passData.Degree} color={dataColor} sx={{ p: 1 }}>
            <Chip label={props.passData.FieldOfStudy} color={dataColor} variant="outlined" />
        </Badge>

    );
}

// {

//                 "StartDate": "2019",
//                     "EndDate": "2022",
//                         "Description": "Ranked within the top 5 universities in Iran according to the CWUR"
// },