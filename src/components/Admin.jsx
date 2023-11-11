import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box,Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Admin() {
  let location = useLocation();
  return (
    
    <>
    <Link to='/admin' style={location.pathname === '/admin' ? { backgroundColor: '#edeceb',borderRadius:'130px', textDecoration: 'none' } : { textDecoration: 'none' }}>

       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <DashboardIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Admin Panel</Typography>
        </Box>
    </Link>
    </>
  );
}

export default Admin;
