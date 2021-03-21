import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import CustomHref from './customs/CustomHref.jsx'

//ICONS
import github from '../images/github.svg'
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'

const useStyles = makeStyles((theme) => ({
    logos: {
        [theme.breakpoints.between(0, 600)]: {
            justifyContent: "center",
        },
        [theme.breakpoints.between(0, 266)]: {
            flexDirection:"column",
        }
    },
    svgLogo: {
        filter: "invert(99%)",
        "&:hover": {
            filter: "invert(23%)"
        }
    },
    link: {
        "&:link": {
            color: "#f3f3f3",
        },
        "&:visited": {
            color: "#f3f3f3"
        },
        "&:hover": {
            color: "#565656"
        }
    }
}));

const Footer = () => {
    const styles = useStyles()
    return ( 
        <>
        <Container style={{maxWidth:"100%", backgroundColor:"#1c1d25", color:"#f3f3f3"}} >
            <Box display="flex" height="400px" flexWrap="wrap" flexDirection="column" justifyContent="flex-end" alignContent="center" >
                <Typography variant="h6" align="center">© {new Date().getFullYear()} Leandro Joan Bustos</Typography>
                <Typography variant="h6" align="center">
                    Chatbot Icon made by {
                        <a className={styles.link} href="https://www.flaticon.com/authors/flat-icons" target="blank" title="Flat Icons">Flat Icons</a>  
                    } from {
                        <a className={styles.link} href="https://www.flaticon.com/" target="blank" title="Flaticon">www.flaticon.com</a>
                    }
                </Typography>
            </Box>
            <Box className={styles.logos} display="flex" width="100%" flexDirection="row" flexWrap="wrap" justifyContent="flex-end" alignContent="space-evenly" alignItems="center"> 
                    <CustomHref component={() => <img className={styles.svgLogo} src={github} alt="logo" title="Github logo" style={{maxWidth:"100%", width:80}}/>} href="https://www.linkedin.com/in/leandro-bustos-2b2a73144/" target="blank"/>
                    <CustomHref component={() => <img className={styles.svgLogo} src={linkedin} alt="logo" title="Linkedin" style={{maxWidth:"100%", paddingLeft:20, width:70}}/>} href="https://www.linkedin.com/in/leandro-bustos-2b2a73144/" target="blank"/>
                    <CustomHref component={() => <img className={styles.svgLogo} src={facebook} alt="logo" title="facebook logo" style={{maxWidth:"100%", width:70}}/>} href="https://www.linkedin.com/in/leandro-bustos-2b2a73144/" target="blank"/>
            </Box>
        </Container>
        </>
    )
}

export default Footer;