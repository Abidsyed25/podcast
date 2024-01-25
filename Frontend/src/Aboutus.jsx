import React from "react";
import {Avatar} from "@mui/material";
import { Box,Paper,Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function Aboutus(){
    let location = useLocation();
    return (
        <>
        <Box sx={{height:'87vh',width:'100%',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>

    <Paper elevation={3} sx={{margin:'10px'}}>

        <Box sx={{padding:'15px',width:'130px',margin:'10px'}} >
          
           <Typography variant="body2" align="center">This podcast website is developed by Abid Syed, a student of G Pulla Reddy Engineering College</Typography>
        </Box>
        
    </Paper>
           <Avatar alt="Remy Sharp" src="abid.jpg" />
       
        </Box>
   
        </>
    )
}
export default Aboutus;