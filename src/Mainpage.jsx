import React from "react";
import Maincard from "./components/Maincard";
import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect,useState } from "react";
import {CircularProgress} from "@mui/material";
import { useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCookies } from "react-cookie";
function Mainpage(){
    let [data,setdata] = useState(null);
    const {id} = useParams();
    let [click,setclick] = useState(false);
    let [cookie] = useCookies();
    let [fetched, setfetch] = useState(false);
    const handleclick = (e) => {
        if(!click){
          console.log(cookie.id);
          fetch("https://podcast-m2p7silv.b4a.run/fav",{ method: 'POST',headers: {
            'Content-Type': 'application/json', // Specify that you're sending JSON
          }, body:JSON.stringify({num:id,token:cookie.id}) }).then(res => res.json()).then(data => setclick(true)).catch(err => console.log(err))
        }else{
            fetch("https://podcast-m2p7silv.b4a.run/fav",{ method: 'POST',headers: {
            'Content-Type': 'application/json', // Specify that you're sending JSON
          }, body:JSON.stringify({num:id,token:cookie.id}) }).then(res => res.json()).then(data => setclick(false)).catch(err => console.log(err))
        }
    }
    const handle = (data) => {
         setfetch(true);
         console.log(data.message);
         if(data.message){
            setclick(true);
         }
    }
  useEffect(() => {
    
    fetch(`https://podcast-m2p7silv.b4a.run/main/${id}`,{ method: 'GET'}).then(res => res.json()).then(data => setdata(data)).catch(err => console.log(err))
    if (cookie.id) {
        // Append query parameters to the URL
        fetch(`https://podcast-m2p7silv.b4a.run/favn?num=${id}&token=${cookie.id}`, { method: 'GET' })
          .then(res => res.json())
          .then(data => handle(data))
          .catch(err => console.log(err));
      }
},[]);
if(!data){
    return (<Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CircularProgress />
    </Box>)
 }
    return (
        data && 
        <>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'20px'}}>
            <Maincard data={data}/>
            <Box sx={{width:'95%',margin:'20px'}}>
                { fetched ? click ? <FavoriteIcon sx={{marginX:'10px'}} onClick={handleclick}/> : 
            <FavoriteBorderIcon sx={{marginX:'10px'}} onClick={handleclick}/> : <></> }
            <ShareIcon/>
            </Box>
        </Box>
        </>
    )
}
export default Mainpage;