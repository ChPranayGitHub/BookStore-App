import React from "react";
import { AppBar } from '@mui/material';
import { Typography,Toolbar,Tabs,Tab } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value,setVal]=React.useState();
  return (
  <div>
  <AppBar postion="sticky" sx={{backgroundColor:"#183A1D"}}>
     <Toolbar>
       <NavLink to="/" style={{color:"khaki"}}>
      <Typography>
        <LibraryBooksIcon/>
      </Typography>
       </NavLink>
      <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setVal(val)} sx={{marginLeft:"auto"}}>
        <Tab LinkComponent={NavLink} to="/add" label="Add product"/>
        <Tab LinkComponent={NavLink} to="/books" label="Books"/>
        <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
      </Tabs>
    </Toolbar>
   </AppBar>
  </div>
 );
};
export default Header;
