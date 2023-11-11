import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import './Maincard.css';
import MuiAudioPlayer from 'mui-audio-player-plus';
import { useRef,useState } from 'react';
import { useEffect } from 'react';
import { red } from '@mui/material/colors';
export default function Maincard({data}) {
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing(container.scrollWidth > container.offsetWidth);
    }
  }, [data[0].title]);
  

  return (
    
    <Card sx={{ width:'95%'}}>
           
        <CardMedia
          component="img"
          height="200px"
          image={"../"+data[0].category+".jpg"}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{whiteSpace: 'nowrap'}} ref={containerRef}>
          {isOverflowing ? <marquee scrollamount="3">

{data[0].title}
</marquee> : <Box>{data[0].title}</Box>}
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[0].description}
          </Typography>
          <Paper elevation={3}>

          <Box sx={{width:'900px',margin:'auto',marginTop:'30px',height:'100px',display:'flex',alignItems:'center'}}>

         <MuiAudioPlayer id="custom" src={data[0].source} paperize={false} inline display="waveform" waveColor="black" containerWidth={{xs:230,sm:400,md:600,lg:800,xl:1000}} playPauseIconButtonProps={{ sx: { backgroundColor: red, color: red, "&:hover": { backgroundColor: red, }, }, }} />
          </Box>
          </Paper>
        </CardContent>
      
    </Card>
          
  );
}
