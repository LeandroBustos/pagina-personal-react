import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'
import {
  BottomNavigation, 
  BottomNavigationAction, 
  // Container, 
  // Box
} from '@material-ui/core'
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const {pathname} = useLocation()
    const paths = pathname.split('/')
    const [value, setValue] = useState(`/${paths[paths.length - 1]}` || "/home")
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    
    return ( 
        <BottomNavigation value={value} onChange={handleChange} style={{
            width:"100%", 
            height:"100%",
            backgroundColor:"#EDEDED", 
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            alignContent:"center",
            alignItems:"center"
          }}>
            <BottomNavigationAction 
                component={NavLink}
                to={`/pagina-personal-react/${value}`}
                // label="Home" 
                value="/home" 
                icon={"Home"} 
            />
            <BottomNavigationAction 
              component={NavLink}
              to={`/pagina-personal-react/${value}`}
              // label="Favorites" 
              value="/about-me" 
              icon={"About me"} 
            />
            <BottomNavigationAction 
              component={NavLink}
              to={`/pagina-personal-react/${value}`}
              // label="Nearby" 
              value="/tecnologies" 
              icon={"Tecnologies"} 
            />
            <BottomNavigationAction 
              component={NavLink}
              to={`/pagina-personal-react/${value}`}
              // label="Folder" 
              value="/portfolio" 
              icon={"Portfolio"} 
            />
        </BottomNavigation>
    );
}

export default NavBar;