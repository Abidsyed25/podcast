import { Typography,Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function About() {
  let location = useLocation();
  return (
    
    <>
    <Link to='/about' style={location.pathname === '/about' ? { backgroundColor: '#edeceb',borderRadius:'130px', textDecoration: 'none',outline: 'none' } : { textDecoration: 'none',outline: 'none' }}>

       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <InfoIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>About us</Typography>
        </Box>
    </Link>
    </>
  );
}

export default About;
