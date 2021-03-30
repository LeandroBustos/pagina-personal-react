import React, {useMemo} from 'react'
import { makeStyles } from '@material-ui/core/styles'

//COMPONENTS
import CustomHref from './CustomHref.jsx'

const Card = ({backgroundColor, imgProps, hrefProps, content:Content}) => {
    const useStyles = useMemo(() => {
        return makeStyles(() => ({
            //ESTILOS MASCARA-CARTA
            card:{
                position:"relative",
                display:"flex",
                marginBottom:"50px",
                marginLeft:"50px",
                zIndex:99,
                boxShadow: "0 20px 80px 0 rgb(0 0 0 / 45%)",
                transition: "all .4s ease-in",
                "&:hover":{
                    boxShadow: "0 20px 80px 0 rgb(0 0 0 / 65%)",
                    "& $cardInfo::after":{
                        "-webkit-transform": "translateX(0%)"
                    },
                    //ESTILOS EFECTO HOVER PARA TEXTO TITULO
                    "& $cardInfo a":{
                        transform: "scale(1.05)",
                        transition: "transform .45s,opacity .25s,-webkit-transform 2s",
                    },
                    //ESTILOS EFECTO HOVER PARA TEXTO SECUNDARIO
                    "& $cardInfo h3":{
                        opacity:1,
                        "-webkit-transform": "translateY(15px)", 
                        transform: "translateY(15px)",
                        transition: "opacity 1.5s,-webkit-transform 1s cubic-bezier(.694,.048,.335,1)",
                    }
                }
            },
            //ESTILOS CONTENIDO DE CARTA
            cardInfo:{
                position:"absolute",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color: "white",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: 100,
                //ESTILOS PARA EFECTO DE TRANSICION LATERAL CON TRANSPARENCIA
                "&::after":{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    opacity: 0.8,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(28,29,37,.9)",
                    background: `linear-gradient(270deg, ${backgroundColor})`,
                    "-webkit-transform": "translateX(-100%)",
                    transition: "transform .35s cubic-bezier(.694,.048,.335,1) .2s,opacity .2s,-webkit-transform .35s cubic-bezier(.694,.048,.335,1) .2s",
                    zIndex: 9
                },
                //ESTILOS PARA TEXTO TITULO
                "& a":{
                    position:"absolute",
                    display: "flex",
                    // bottom: 50,
                    paddingBottom: 100,
                    textShadow: "5px 5px 11px rgb(74 74 74 / 30%)",
                    lineHeight: 2,
                    fontWeight: "bold",
                    fontSize: "2.5em",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    background: "-webkit-linear-gradient(white, #fafafa)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    zIndex:102,
                    width:"100%",
                    height:"100%",
                    transition: "transform .45s,opacity .25s,-webkit-transform .45s",
                    "&:visited":{
                        color: `linear-gradient(270deg, ${backgroundColor})`
                    }
                },
                //ESTILOS EFECTO HOVER PARA TEXTO SECUNDARIO
                "& h3":{
                    position:"absolute",
                    display: "flex",
                    zIndex:102,
                    top: 0,
                    color: "white",
                    fontSize: "1.5em",
                    justifyContent: "center",
                    alignItems: "center",
                    width:"100%",
                    height:"100%",
                    opacity: 0,
                    "-webkit-transform": "translateY(0px)", 
                    transition: "opacity .9s,-webkit-transform 2s cubic-bezier(.694,.048,.335,1)"
                }
            },
            //ESTILOS PARA IMAGEN DE LA CARTA
            cardImg: {
                width: "100%",
                maxWidth: "400px",
            }
        }))
    }, [backgroundColor])

    const {card, cardInfo, cardImg} = useStyles()
    return ( 
        <div className={card}>
            <img 
                className={cardImg}
                {...imgProps}
            />
            <div className={cardInfo} >
                <h3>React+Nodejs</h3> 
                <CustomHref component={Content} {...hrefProps}/>
            </div>
        </div>
    )
}
export default Card