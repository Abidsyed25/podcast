import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Searchbar() {
  let location = useLocation();
  
  let [text,settext] = useState('');
  useEffect(() => {
    // Update state when the route changes
    if(location.pathname!='/search')
    settext('');
  }, [location.pathname]); 
  const handletype = (e) => {
      settext(e.target.value);
      console.log(text);
      console.log(location);
  }
  return (
    <>
      <TextField name="query" value={text} onChange={handletype} id="outlined-basic" size="small" placeholder="search" InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style:{borderRadius:'30px'}
      }} sx={{width:"70%"}}/>
    </>
  );
}
export default Searchbar;