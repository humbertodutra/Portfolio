import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import PortfolioBlockBe from "./PortfolioBlock_be";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    useState = (info.portfolio);
    return (
       <>        
       <Box marginTop={10}>
        <h1 style={ {color: "$ligthgray", textAlign: 'center', margin: '60px'
    , width: 'auto'}}>Front End Projects</h1>
             <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
        <Box marginTop={10}>
        <h1 style={ {color: "$ligthgray", textAlign: 'center', margin: '100px'
    , width: 'auto'}}>Back End Projects</h1>
             <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolioBackend.map((project, index) => (
                   <Grid item xs={12} md={3} key={index}>
                       <PortfolioBlockBe image={'a'} live={project.live} source={project.source} title={project.title} stacks={project.stack}/>
                   </Grid>
                ))}
            </Grid>
        </Box>     
        </> 
    );
};