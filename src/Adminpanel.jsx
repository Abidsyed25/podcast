import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Paper, FormControl } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@mui/material";
import { Select, MenuItem,InputLabel } from "@mui/material";
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function Adminpanel({ item, setitem }) {
  let [cookie, setcookie] = useCookies();
  let navigate = useNavigate();
  let [title, settitle] = useState("");
  let [desc, setdesc] = useState("");
  let [speaker, setspeaker] = useState("");
  let [category, setcategory] = useState("");
  let [upload, setupload] = useState(null);
  let [file, setfile] = useState(null);
  let [load, isload] = useState(false);
  

  const handleadmin = async (e) => {
    isload(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('speaker', speaker);
    formData.append('category', category);
    console.log(formData.getAll('file'));
    try {
      let api = await fetch('https://podcast-m2p7silv.b4a.run/podcast', { method: 'POST', body: formData });
      let tokenn = await api.json();
      console.log(tokenn);
    }
    catch (e) {
      console.log(e);
    }
    settitle("");
    setdesc("");
    setspeaker("");
    setcategory("");
    setfile(null);
    setupload(null);
    isload(false);


  }
  const hanldetitle = (e) => {
    settitle(e.target.value);
    console.log(title);
    console.log(file);
  }
  const hanldedesc = (e) => {
    setdesc(e.target.value);
  }
  const hanldespeaker = (e) => {
    setspeaker(e.target.value);
  }
  const handlecategory = (e) => {
    setcategory(e.target.value);
    console.log(category);
  }
  const handleupload = (e) => {

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedFileTypes = ["audio/mpeg", "audio/mp3"];
      if (allowedFileTypes.includes(selectedFile.type)) {
        // Valid MP3 file
        // You can set the file state or perform further actions here
        setupload(selectedFile.name);
        setfile(selectedFile);

      } else {
        // Invalid file type
        alert("Invalid file type. Only MP3 files are allowed.");
        e.target.value = ""; // Clear the input field
      }

    } else {
      // Handle the case where no file is selected or handle any other logic
    }

  }
  return (
    cookie && cookie.id ?
      <>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>

          <Typography variant="h5" sx={{margin:'10px'}}>Dashboard</Typography>
          

          <Paper elevation={3} sx={{ width: '80%', margin: '10px', padding: '10px' }}>
            <form onSubmit={handleadmin}>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Typography variant="h6" sx={{ margin: '15px', marginBottom: '0px' }}>Upload Podcasts</Typography>
                <TextField value={title} onChange={hanldetitle} required='true' id="outlined-basic" label="Title" variant="outlined" sx={{ margin: '15px', width: '95%' }} />
                <TextField value={desc} multiline onChange={hanldedesc} required='true' id="outlined-basic" label="Desciption" variant="outlined" sx={{ margin: '15px', width: '95%' }} />
                <TextField value={speaker} onChange={hanldespeaker} required='true' id="outlined-basic" label="Speaker" variant="outlined" sx={{ margin: '15px', width: '95%' }} />
                <FormControl fullWidth sx={{ margin: '15px', width: '95%' }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select required='true' labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Category" onChange={handlecategory}>
                  <MenuItem value={'technology'}>Technology</MenuItem>
                  <MenuItem value={'sports'}>Sports</MenuItem>
                  <MenuItem value={'health'}>Health</MenuItem>
                  <MenuItem value={'others'}>others</MenuItem>
                </Select>
                </FormControl>
                <Button sx={{ margin: '15px', alignSelf: 'flex-start' }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                  Upload file
                  <VisuallyHiddenInput name="file" onChange={handleupload} type="file" required='true' accept="audio/mpeg" />

                </Button>
                {upload && <Typography sx={{ alignSelf: 'flex-start', marginLeft: '15px' }} variant="p">{upload} </Typography>}
                <Button name='abid' type="submit" variant="contained" sx={{ width: '90px', margin: 'auto', marginY: '15px' }}>Submit</Button>
                {load && <CircularProgress size="20px" color="secondary" sx={{ margin: 'auto' }} />}
              </Box>
            </form>
          </Paper>
        </Box>



      </> : <><Box sx={{ height: '90vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Paper elevation={5} sx={{ height: '60px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography variant="h6">Please login to continue</Typography></Paper></Box></>
  )

}
export default Adminpanel;