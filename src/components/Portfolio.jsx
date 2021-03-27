import React from 'react'
import { Box, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//COMPONENTS
import CustomHref from './customs/CustomHref.jsx'

//IMAGES
import clicpaq from '../images/projects/clicpaq.jpg'
import autism from '../autism.jpg'

const useStyles = makeStyles((theme) => ({
    card: {
        position: "relative",
        height: "fit-content",
        display: "flex",
        zIndex: 99,
        cursor: "pointer",
        transition: "all .4s ease-in"
    },
    cardInfo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        height: "99%",
        zIndex: 100,
        border: "thin solid #fff",
        backgroundColor: "#EDEDED",
        color: "var(--secondary-color)",
        opacity: 0,
        transition: "all .4s ease-in",
        "&:hover":{
            opacity: 0.7
        }
    }
}))

const Portfolio = () => {
    const styles = useStyles()

    return (
        <Box width="300px" display="flex" flexWrap="wrap" justifyContent="center" alignContent="space-between">
            <div className={styles.card}>
                <img src={clicpaq} alt="Clicpaq" tittle="Clicpaq" 
                    style={{ 
                        width: "100%",
                        objectFit: "cover"
                    }}
                />
                <CustomHref component={() => <h3>React+Nodejs</h3>} className={styles.cardInfo} href="http://www.clicpaq.com/" target="_blank" />    
            </div>
            <div className={styles.card}>
                <CustomHref component={() => <img src={autism} alt="autism" tittle="autism" 
                    style={{ 
                        width: "100%",
                        objectFit: "cover"
                    }}/>} 
                href="http://www.clicpaq.com/" target="blank"/>
                <div className={styles.cardInfo}>
                    <h3>React+Nodejs</h3>
                </div>
            </div>
        </Box>
    )
}

export default Portfolio