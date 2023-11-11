import { Grid, Box, Paper } from "@mui/material";
import Title from "./components/Title";
import Searchbar from "./components/Searchbar";
import Homepage from "./Homepage";
import { Routes,Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";
import Signup from "./Signup";
import { useCookies } from "react-cookie";
import Adminpanel from "./Adminpanel";
import { useState } from "react";
import Search from "./Searchpod";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Navlist from "./Navlist";
import Music from "./Music";
import Aboutus from "./Aboutus";
import './Layout.css';
import Fav from "./Fav";
function Layout() {
    let [cookies] = useCookies();
    let [item,setitem] = useState(null);
    let navigate = useNavigate();
    
    
    const handleSearch = (e) => {
        
          
          e.preventDefault();
          console.log(e.target.query.value);
          navigate('/search?query=' + e.target.query.value);
    }
    return (
        <>
            <Grid container>
                <Grid item sm={2.5} sx={{display:{xs:'none',sm:'block'}}}>
                    <Paper elevation={6} sx={{zIndex:100}}>

                    <Box sx={{ height: '100vh' }}>
                        <Title/>
                        <Box sx={{display:'flex',flexDirection:'column',margin:'10px'}}>
                        <Navlist/>
                        
                        </Box>
                        
                    </Box>
                    </Paper>
                </Grid>
                <Grid item sm={9.5} xs={12}>
                        <form onSubmit={handleSearch}>
                           
                   <Paper elevation={3} sx={{margin:'2px'}}>

                    <Box sx={{ height: '9vh',display:{xs:'none',sm:'flex'},alignItems:'center',justifyContent:'center' }}>
                        <Searchbar/>
                    </Box>
                   </Paper>
                            
                        </form>
                        <Box sx={{ border: '2px solid black', height: '8vh',display:{xs:'flex',sm:'none'},alignItems:'center',justifyContent:'space-between'}}>
                            <Box sx={{alignItems:'start'}}>

                        <Navbar/>
                            </Box>
                        <Title/>
                            <Box sx={{width:'24px'}}></Box>
                    </Box>
                    <Box sx={{ height: '89vh',margin:'5px',overflow:'scroll' }} className="custom-scrollbar">
                        <Routes>
                            <Route path="/" element={<Homepage/>}>
                            </Route>
                            <Route path="/main/:id" element={<Mainpage/>}></Route>
                           {!cookies.id && <Route path="/login" element={<Login/>}></Route>} 
                            <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/admin" element={<Adminpanel item={item} setitem={setitem}/>}></Route>
                        <Route path="/search" element={<Search/>}></Route>
                        <Route path="/about" element={<Aboutus/>}></Route>
                        <Route path="/profile" element={<Fav/>}></Route>
                        
                        <Route path="/genre/:name" element={<Music/>}></Route>
                            <Route path="*" element={<Homepage/>} />
                        </Routes>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Layout;
