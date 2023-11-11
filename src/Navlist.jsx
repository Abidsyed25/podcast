import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import Person2Icon from '@mui/icons-material/Person2';

export default function Navlist() {
    let location = useLocation();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  let [cookies,setcookies,remove] = useCookies();
  let navigate = useNavigate();
  const handleListItem2 = (event, index) => {
    setSelectedIndex(index);
    navigate('/admin');
  };
  const handleListItem1 = (event, index) => {
    setSelectedIndex(index);
    navigate('/');
  };
  const handleListItem3 = (event, index) => {
    setSelectedIndex(index);
    navigate('/about');
  };
  const handleListItem4 = (event, index) => {
    setSelectedIndex(index);
    navigate('/profile');
  };
  const handleclick = (e) => {
    remove('id');
    
}

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop:{xs:'10px',sm:'0px'},margin:'auto' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={location.pathname === '/'}
          onClick={(event) => handleListItem1(event, 0)}
          
        >
          <ListItemIcon style={{minWidth: '40px'}}>
          <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          selected={location.pathname === '/profile'}
          onClick={(event) => handleListItem4(event, 3)}
          
        >
          <ListItemIcon style={{minWidth: '40px'}}>
          <Person2Icon/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton
          selected={location.pathname === '/admin'}
          onClick={(event) => handleListItem2(event, 1)}
        >
          <ListItemIcon style={{minWidth: '40px'}}>
            <Dashboard/>
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItemButton>
        <ListItemButton
          selected={location.pathname === '/about'}
          onClick={(event) => handleListItem3(event, 2)}
        >
          <ListItemIcon style={{minWidth: '40px'}}>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
      {!cookies.id ? <Box sx={{display:'flex',flexDirection:{sm:'column',md:'row'},alignItems:'center',justifyContent:'center'}}>

      <Button LinkComponent={Link} to="/login" variant="contained" sx={{textTransform: 'none',margin:'10px'}}>Login</Button>
      <Button LinkComponent={Link} to="/signup" variant="outlined" sx={{textTransform: 'none',margin:'10px'}}>Sign up</Button>
      </Box>
      
                       
                        :   <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            
                        <Button onClick={handleclick} variant="outlined" sx={{margin:'10px',textTransform: 'none'}}>Logout</Button>
                        
                        </Box>  }
      </List>
    </Box>
  );
}
