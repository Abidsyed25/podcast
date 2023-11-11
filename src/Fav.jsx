import React, { useEffect, useState } from "react";
import { Box,Typography,Paper } from "@mui/material";
import CardList from "./components/Cardlist";
import {CircularProgress} from "@mui/material";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
function Fav(){
    let [item,setitem] = useState(null);
    let [item2,setitem2] = useState(null);
    const {name} = useParams();
    let [cookies] = useCookies();
    useEffect(() => {
          fetch(`https://podcast-m2p7silv.b4a.run/favlist?token=${cookies.id}`)
            .then((res) => res.json())
            .then((data) => setitem(data))
            .catch((err) => console.log(err));
            fetch(`https://podcast-m2p7silv.b4a.run/admin?token=${cookies.id}`)
            .then((res) => res.json())
            .then((data) => setitem2(data))
            .catch((err) => console.log(err));
        
      }, []);
      
    if(!item){
        return <>
        <Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <CircularProgress />
        </Box>
        </>
    }
    return (
        <>
        { cookies.id ? 
        <>
        <Paper elevation={3} sx={{ zIndex:30,margin: '15px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

<Typography variant="h5" >{item2 ? item2.fn + " " + item2.ln : <CircularProgress size="20px" />}</Typography>
</Paper>
        
       <Typography variant="h5" sx={{margin:'40px'}}>Favourite List  </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'40px'}}>
                            { Array.isArray(item) && item.length>0 ?
                                item.map((e,i)=>{
                                    return <CardList post={e} key={i}/>
                                }):<Typography variant="p" sx={{margin:'auto'}}>No podcasts to show</Typography>
                            }
                        
                        </Box>
        </>
        : <><Box sx={{ height: '90vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Paper elevation={5} sx={{ height: '60px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography variant="h6">Please login to continue</Typography></Paper></Box></>
    }
        </>
    )
}
export default Fav;