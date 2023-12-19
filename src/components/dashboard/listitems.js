import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import { allChilds } from '../../staticData/staticChilds';
const getAllChilds = allChilds;



export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/profile/Contact">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>
      <ListItemButton component={Link} onClick={()=>{
        localStorage.clear()
        return window.location.pathname = "/"
        }} >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Children
    </ListSubheader>
    {getAllChilds.map((child)=>{
      return( 
        <ListItemButton component={Link} key={child.id} to={`/profile/childProfile?child=${child.name}`}>
          <ListItemIcon>
           <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={child.name} />
        </ListItemButton>
      )
    })}
  </React.Fragment>
);