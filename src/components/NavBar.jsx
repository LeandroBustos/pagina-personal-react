import React from 'react';
import {BottomNavigation, BottomNavigationAction, Container, Box} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
                to="/"
                // label="Home" 
                value="recents" 
                icon={"Home"} 
            />
            <BottomNavigationAction 
              component={NavLink}
              to="/movies"
              // label="Favorites" 
              value="favorites" 
              icon={"About-me"} 
            />
            <BottomNavigationAction label="Nearby" value="nearby" icon={"Tecnologies"} />
            <BottomNavigationAction label="Folder" value="folder" icon={"Portfolio"} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}

export default NavBar;