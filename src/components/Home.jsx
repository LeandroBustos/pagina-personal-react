import React from 'react';
import { Box } from '@material-ui/core';

import autism from './../autism.jpg';


const Home = () => {
    return (
        <Box style={{display:"flex",flexWrap:"wrap", flexDirection:"row", width:"100%", alignContent:"flex-end", justifyContent:"center"}}>
            <img src={autism} alt="Javascript" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="HTML" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="CSS" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="React" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="NodeJS" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="Graphql" style={{maxWidth:"100%", width:300}}/>
            <img src={autism} alt="Express" style={{maxWidth:"100%", width:300}}/>
        </Box>
    )
}

export default Home