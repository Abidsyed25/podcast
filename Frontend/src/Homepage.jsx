import React, { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";
import CardList from "./components/Cardlist";
import {CircularProgress} from "@mui/material";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { addUser } from "./store/fetchslice";
import Genre from "./components/Genre";
function Homepage(){
    let item = useSelector((state) => {
        return state.items;
    })
    let dispatch = useDispatch();
    useEffect(() => {
        if (!item) {
          fetch("https://podcast-m2p7silv.b4a.run/")
            .then((res) => res.json())
            .then((data) => dispatch(addUser(data)))
            .catch((err) => console.log(err));
        }
      }, [item]);
        // !item && fetch("http://localhost:8000/").then(res => res.json()).then(data => dispatch(addUser(data))).catch(err => console.log(err));
    let genre = [{name:'technology',url:'technology.jpg'},{name:'sports',url:'sports.jpg'},{name:'health',url:'health.jpg'},{name:'others',url:'others.jpg'}];    
   
    if(!item){
        return <>
        <Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <CircularProgress />
        </Box>
        </>
    }
    return (
        
        <>
         <Typography variant="h5" sx={{margin:'40px',marginBottom:'10px'}}>Genres  </Typography>
         <Box sx={{display:'flex',flexWrap:'wrap',margin:{xs:'20px',sx:'40px'}}}>
                            { Array.isArray(item) ?
                                genre.map((e,i)=>{
                                     return <Genre genre={e} key={i}/>
                                }):<h1>no</h1>
                            }


                        
                        </Box>
       <Typography variant="h5" sx={{margin:'40px'}}>Recent Episodes  </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'20px'}}>
                            { Array.isArray(item) && item.length > 0 ? 
                                item.map((e,i)=>{
                                     return <CardList post={e} key={i}/>
                                }):<Typography variant="p" sx={{margin:'auto'}}>No podcasts to show</Typography>
                            }
                        
                        </Box>
   
        </>
    )
}
export default Homepage;