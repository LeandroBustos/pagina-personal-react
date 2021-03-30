import React from 'react';
import {NavLink} from 'react-router-dom'
import {ButtonGroup, Button} from '@material-ui/core'

const NavBarButtom = ({reference}) => {
    return (
        <ButtonGroup style={{
            width:"100%", 
            height:"100%",
            backgroundColor:"#EDEDED", 
            position: "sticky",
            top:0,
            zIndex:1000,
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center"
        }}
        onClick={() => reference.current.scrollIntoView({behavior: 'smooth'})}
        variant="contained" color="primary">
            <Button style={{width:"25%"}} component={NavLink} to="/home">Home</Button>
            <Button style={{width:"25%"}} component={NavLink} to="/about-me">About me</Button>
            <Button style={{width:"25%"}} component={NavLink} to="/tecnologies">Tecnologies</Button>
            <Button style={{width:"25%"}} component={NavLink} to="/portfolio">Portfolio</Button>
        </ButtonGroup>
    );
}

export default NavBarButtom;