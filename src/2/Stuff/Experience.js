import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Experince(props) {
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
                        {props.passData.Employer}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }} variant="body2">{props.passData.Level}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "left" }}>
                    <Typography variant="h5" >
                        {props.passData.Title}
                    </Typography>
                    <Typography variant="body2">
                        {props.passData.StartDate} &nbsp;
                        {props.passData.EndDate}
                    </Typography>
                    <Typography variant="body" sx={{ textAlign: "left" }}>

                        {props.passData.Description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}


//                 "Description": "Utilized ReactJS for building the frontend user interface, providing a seamless and interactive experience on both web and mobile platforms.\nConfigured and deployed the application on an Ubuntu server, ensuring optimal performance and reliability.\nImplemented Nginx as a web server to handle incoming requests and serve the SPA website, while ensuring proper routing for the mobile application.\nSecured the website and mobile application with Certbot, enabling HTTPS encryption and safeguarding user data privacy.\nIntegrated Web3.js library to establish a connection with the Ethereum blockchain network.\nEnabled users to connect their wallets, such as MetaMask, to seamlessly interact with the token functionalities.\nImplemented features for buying, selling, staking, and unstaking the token through connected wallets.\nDesigned the user interface with CSS3 and Material UI, delivering a modern and visually appealing experience on both web and mobile platforms.",
//                     "Technologies": ""