import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import ProfessionalBlock from './ProfessionalBlock';
import PortfolioBlock from './PortfolioBlock';
import PortfolioBlockBe from './PortfolioBlock_be';
import { info } from '../../info/Info';

export default function Portfolio() {
    const [display, setDisplay] = useState('myProjects'); // State to control displayed projects

    return (
        <>
            <Box display="flex" justifyContent="center" gap={2} marginTop={5}>
                <Button variant="contained" onClick={() => setDisplay('myProjects')}>
                    My Projects
                </Button>
                <Button variant="contained" onClick={() => setDisplay('trybeProjects')}>
                    Trybe Projects
                </Button>
            </Box>

            {display === 'myProjects' && (
                <Box marginTop={10}>
                    <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>My Projects</h2>
                    <Grid container display={'flex'} justifyContent={'center'}>
                        {info.portfolioPro.map((project, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <ProfessionalBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}

            {display === 'trybeProjects' && (
                <>
                    <Box marginTop={10}>
                        <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>Front End Projects</h2>
                        <Grid container display={'flex'} justifyContent={'center'}>
                            {info.portfolio.map((project, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box marginTop={10}>
                        <h2 style={{ color: "$ligthgray", textAlign: 'center', margin: '60px', width: 'auto' }}>Back End Projects</h2>
                        <Grid container display={'flex'} justifyContent={'center'}>
                            {info.portfolioBackend.map((project, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                    <PortfolioBlockBe image={'a'} live={project.live} source={project.source} title={project.title} stacks={project.stack} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
}
