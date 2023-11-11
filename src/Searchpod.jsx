import React, { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";
import CardList from "./components/Cardlist";
import {CircularProgress} from "@mui/material";
import { useSearchParams} from "react-router-dom";
function Searchpod(){
    const q = useSearchParams();
    console.log(q[0]);
    let [it,setIte] = useState(null);
    useEffect(() => {
        fetch("https://podcast-m2p7silv.b4a.run/search?" + q[0]).then(res => res.json())
        .then(data => setIte(data)).catch(err => console.log(err))
    },[q[0]]);
    if(!it){
        return <>
        <Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <CircularProgress />
        </Box>
        </>
    }
    return (
        
        <>
       <Typography variant="h5" sx={{margin:'40px'}}>Search Results </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'40px'}}>
                            { it.length > 0 ?
                                it.map((e,i)=>{
                                     return <CardList post={e} key={i}/>
                                }) : <Typography variant="p" sx={{margin:'auto'}}>No podcasts to show</Typography>
                            }
                        
                        </Box>
   
        </>
    )
}
export default Searchpod;