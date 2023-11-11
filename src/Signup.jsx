import React, { useState } from "react";
import { Paper,TextField,Box, Typography, Button } from "@mui/material";
function Signup(){
    let [fname,setfname] = useState("");
    let [lname,setlname] = useState("");
    let [email,setemail] = useState("");
    let [pass,setpass] = useState("");
    let [flag,setflag] = useState(false);
     const handlesignup = async (e) => {
           e.preventDefault();
        //    const formData = new FormData();
        //    formData.append('fname', fname);
        //    formData.append('lname',lname);
        //    formData.append('email',email);
        //    formData.append('pass',pass);
        //    console.log(formData.getAll('fname'));
        const data = { fname:fname,lname:lname,email:email,pass:pass };
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify that you're sending JSON
  },
  body: JSON.stringify(data), // Convert the object to a JSON string
};
           try{
            let api = await fetch('https://podcast-m2p7silv.b4a.run/signup',options);
            let tokenn = await api.json();
            if(!tokenn.name){
                setflag(true);
            }
            else{
                setflag(false);
            }
           }catch(e){
            console.log(e);
           }
           setfname("");
           setlname("");
           setemail("");
           setpass("");
    }
    const handlef = (e) => {
        setfname(e.target.value);
        console.log(fname);
    }
    const handlel = (e) => {
        setlname(e.target.value);
        console.log(lname);
    }
    const handleemail = (e) => {
        setemail(e.target.value);
        console.log(email);
    }
    const handlepass = (e) => {
        setpass(e.target.value);
        console.log(pass);
    }
    return (
        <>
        <Box sx={{width:'100%',height:'87vh',display:'flex',alignItems:'center',justifyContent:'center'}}>

       <Paper elevation={3} sx={{width:{xs:'80%',sm:'50%'},height:'auto'}}>
        <form onSubmit={handlesignup}>
        <Box sx={{display:'flex',flexDirection:'column',padding:'20px'}}>
        <Typography variant="h5" sx={{textAlign:'center',margin:'30px',marginTop:'0px'}}>Sign up</Typography>
    
       <TextField onChange={handlef} value={fname} required='true' id="outlined-basic" label="FirstName" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
       <TextField onChange={handlel} value={lname} required='true' id="outlined-basic" label="LastName" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
        
        <TextField onChange={handleemail} value={email} required='true' type="email" id="outlined-basic" label="Email" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
        <TextField onChange={handlepass} value={pass} required='true' id="outlined-basic" type="password" label="Password" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
        <Button type='submit' variant="contained" sx={{width:'90px',margin:'auto',marginY:'15px',textTransform:'none'}}>Sign up</Button>
        {flag && <Typography color="error" sx={{margin:'auto'}}>Invalid Details</Typography> }
        </Box>
        </form>
       </Paper>
        </Box>
   
        </>
    )
}
export default Signup;