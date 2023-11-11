import React, { useState } from "react";
import { Paper,TextField,Box, Typography, Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";
function Login(){
    let [name,setname] = useState('');
    let [pass,setpass] = useState('');
    let [invalid,setinvalid] = useState(false);
   let [cookies,setcookies] = useCookies('name');
   let [fetching,isfetch] = useState(false);
   let navigate = useNavigate();
    
    const handle = async(e)=>{
         isfetch(true);
         e.preventDefault();
         
         
         const updatedDetails = { username: name, password: pass };
         console.log(e.target.name);
         try{
         let api = await fetch('https://podcast-m2p7silv.b4a.run/login',{ headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },method:'POST',body:JSON.stringify(updatedDetails)});
         let tokenn = await api.json();
         if(tokenn.token){

             console.log(tokenn);
             setcookies('id',tokenn.token);
             setinvalid(false);
             navigate('/admin');
        }
        else{
            setinvalid(true);
        }
    }catch(e){console.log(e);}
        isfetch(false);
    }
    
    
    const handlename = (e) => {
        
        setname(e.target.value);
        
    }
    const handlepass = (e) => {
        setpass(e.target.value);
    }
    
    return (
        <>
        <Box sx={{width:'100%',height:'87vh',display:'flex',alignItems:'center',justifyContent:'center'}}>

       <Paper elevation={3} sx={{width:{xs:'80%',md:'40%'}}}>
        
        <form onSubmit={handle}>

        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant="h5" sx={{textAlign:'center',margin:'30px'}}>Login</Typography>

       <TextField required='true' onChange={handlename} type="email" id="outlined-basic" label="Email" variant="outlined" sx={{margin:'15px'}}/>
       <TextField required='true' onChange={handlepass} id="outlined-basic" type="password" label="Password" variant="outlined" sx={{margin:'15px'}}/>
       

        <Button name='abid' type="submit" variant="contained" sx={{margin:'auto',marginY:'15px',marginBottom:'40px'}}>Login</Button>
        {fetching && <CircularProgress size="20px" color="secondary" sx={{margin:'auto'}}/>}

        {invalid && <Typography variant="p" color="error" sx={{textAlign:'center',margin:'10px'}}>Invalid details</Typography>}
       </Box>
        
        </form>
        
       </Paper>
        </Box>
   
        </>
    )
}
export default Login;