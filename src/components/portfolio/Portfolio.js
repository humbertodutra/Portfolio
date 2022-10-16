import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (       
       <Box marginTop={10}>
        <h2 style={ {color: "$ligthgray", textAlign: 'center', margin: 'auto'
    , width: '100px'}}>Frontend</h2>
            <Grid container display={'flex'} justifyContent={'center'} marginTop={6}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={2} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};