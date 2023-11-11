import { Typography,Box } from "@mui/material";
import LogoDevIcon from '@mui/icons-material/LogoDev';
function Title() {
  return (
    
    <>
       <Box sx={{height:{xs:'auto',sm:'90px'},display:'flex',alignItems:'center',justifyContent:'center'}}>
       <LogoDevIcon fontSize='large'/><Typography variant="h5" >Podcast</Typography>

       </Box>
    </>
  );
}

export default Title;
