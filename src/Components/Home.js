import React from "react";
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import {Link} from "react-router-dom";
const Home =() => {
  return  <div style={{marginTop:"100px"}}>
      <Box component="span"  display="flex" justifyContent="center" alignItems="center">
      <Button LinkComponent={Link} sx={{ backgroundColor:"khaki" }} to="/books" >View Books</Button>
       </Box>
  </div>
};
export default Home;
