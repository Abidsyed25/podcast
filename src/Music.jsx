import React, { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";
import CardList from "./components/Cardlist";
import {CircularProgress} from "@mui/material";
import { useParams } from "react-router-dom";

function Music(){
    let [item,setitem] = useState(null);
    const {name} = useParams();

    useEffect(() => {
        if (!item) {
          fetch("https://podcast-m2p7silv.b4a.run/" + name)
            .then((res) => res.json())
            .then((data) => setitem(data))
            .catch((err) => console.log(err));
        }
      }, [item,name]);
    if(!item){
        return <>
        <Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <CircularProgress />
        </Box>
        </>
    }
    return (
        
        <>
        
       <Typography variant="h5" sx={{margin:'40px'}}>Genre: {name}  </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'40px'}}>
                            { Array.isArray(item) && item.length>0 ?
                                item.map((e,i)=>{
                                     return <CardList post={e} key={i}/>
                                }):<Typography variant="p" sx={{margin:'auto'}}>No podcasts to show</Typography>
                            }
                        
                        </Box>
   
        </>
    )
}
export default Music;