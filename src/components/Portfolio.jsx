import React from 'react'
import { Box } from '@material-ui/core'

//COMPONENTS
import Card from './customs/Card.jsx'

//IMAGES
import clicpaq from '../images/projects/clicpaq.jpg'
import autism from '../autism.jpg'

const Portfolio = () => {

    return (
        <Box width="1000px" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignContent="space-between">
            <Card
                backgroundColor="rgb(125, 23, 0, 0.8), rgb(55, 23, 0, 0.8)"
                imgProps={{
                    src: clicpaq,
                    alt: "Clicpaq",
                    title: "Clicpaq"
                }}
                hrefProps={{
                    href: "http://www.clicpaq.com/",
                    target: "_blank"
                }}
                content={() => <h1>Clicpaq</h1>}
            />
            <Card
                backgroundColor="rgb(10, 23, 0, 0.8), rgb(25, 23, 0, 0.8)"
                imgProps={{
                    src: autism,
                    alt: "autism",
                    title: "autism"
                }}
                hrefProps={{
                    href: "http://www.clicpaq.com/",
                    target: "_blank"
                }}
                content={() => <h1>Clicpaq</h1>}
            />
            <Card
                backgroundColor="rgb(10, 23, 0, 0.8), rgb(25, 23, 0, 0.8)"
                imgProps={{
                    src: autism,
                    alt: "autism",
                    title: "autism"
                }}
                hrefProps={{
                    href: "http://www.clicpaq.com/",
                    target: "_blank"
                }}
                content={() => <h1>Clicpaq</h1>}
                
            />
        </Box>
    )
}

export default Portfolio