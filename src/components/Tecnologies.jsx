import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


//SVGS
import javascript from '../images/javascript.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import react from '../images/react.svg'
import graphql from '../images/graphql.svg'
import rundeck from '../images/rundeck.svg'
import moment from '../images/moment.svg'
import mssql from '../images/mssql.svg'
import mysql from '../images/mysql.svg'
import nodejs from '../images/nodejs.svg'
import bash from '../images/bash.svg'
import puppeteer from '../images/puppeteer.svg'
import yarn from '../images/yarn.svg'
import ubuntu from '../images/ubuntu.svg'
import npm from '../images/npm.svg'
import materialUi from '../images/material-ui.svg'
import lodash from '../images/lodash.svg'
import elasticsearch from '../images/elasticsearch.svg'
import docker from '../images/docker.svg'
import chatbot from '../images/chatbot.svg'
import apache from '../images/apache.svg'
import git from '../images/git.svg'
import github from '../images/github.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.between(0, 600)]: {
            width:"100%",
        },
        width:"50%"
    }
}));

const Tecnologies = ({location}) => {

    const styles = useStyles()
    
    return (
        <Box className={styles.root} style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-between", alignItems:"center"}}>
            <img src={javascript} alt="logo" title="JavaScript logo" style={{maxWidth:"100%", width:100, paddingTop:28}}/>
            <img src={html} alt="logo" title="JavaScript logo" style={{maxWidth:"100%", width:100}}/>
            <img src={css} alt="logo" title="HTML logo" style={{maxWidth:"100%", width:100}}/>
            <img src={puppeteer} alt="logo" title="CSS logo" style={{maxWidth:"100%", width:100}}/>
            <img src={materialUi} alt="logo" title="Material-UI logo" style={{maxWidth:"100%", width:100}}/>
            <img src={react} alt="logo" title="React logo" style={{maxWidth:"100%", width:100}}/>
            <img src={graphql} alt="logo" title="Apollo GraphQL logo" style={{maxWidth:"100%", width:100}}/>
            <img src={elasticsearch} alt="logo" title="Elasticsearch logo" style={{maxWidth:"100%", width:90}}/>
            <img src={moment} alt="logo" title="MomentJS logo" style={{maxWidth:"100%", width:100}}/>
            <img src={github} alt="logo" title="Github logo" style={{maxWidth:"100%", width:110}}/>
            <img src={yarn} alt="logo" title="Yarn logo" style={{maxWidth:"100%", width:100}}/>
            <img src={ubuntu} alt="logo" title="Ubuntu logo" style={{maxWidth:"100%", width:100}}/>
            <img src={mssql} alt="logo" title="Microsoft SQL Server logo" style={{maxWidth:"100%", width:120}}/>
            <img src={mysql} alt="logo" title="MySQL logo" style={{maxWidth:"100%", width:120}}/>
            <img src={bash} alt="logo" title="Bash logo" style={{maxWidth:"100%", width:200}}/>
            <img src={rundeck} alt="logo" title="Rundeck logo" style={{maxWidth:"100%", width:200}}/>
            <img src={nodejs} alt="logo" title="NodeJS logo" style={{maxWidth:"100%", width:120}}/>
            <img src={npm} alt="logo" title="Npm logo" style={{maxWidth:"100%", width:100}}/>
            <img src={apache} alt="logo" title="Apache logo" style={{maxWidth:"100%", width:100}}/>
            <img src={lodash} alt="logo" title="LoDash logo" style={{maxWidth:"100%", width:100}}/>
            <img src={docker} alt="logo" title="Docker logo" style={{maxWidth:"100%", width:100}}/>
            <img src={chatbot} alt="logo" title="Chatbot logo" style={{maxWidth:"100%", width:100}}/>
            <img src={git} alt="logo" title="Git logo" style={{maxWidth:"100%", width:100}}/>
        </Box>
    )
}

export default Tecnologies