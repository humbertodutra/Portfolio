import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import './portfolio.css'

function ProfessionalBlock(props) {
   const { image, live, source, title, stacks } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'30px'}>
         <Box className='img-box' component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '1.5rem' }}>{title}</h1>
         <Box p={1} marginTop={'20px'}py={'0.1rem'} borderRadius={'1px'} display={'flex'} flexDirection={'row'}>
            {stacks.map((a) => <img src={a} alt={''} style={{width: 40}}/>)}
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'1rem'}>
               
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Go to Project'} icon={'fa fa-safari'} />
            </Box>
            {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box> */}
            
         </Box>
      </Box>
   );
}

export default ProfessionalBlock;