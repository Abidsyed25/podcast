import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';
import { useEffect } from 'react';
import {Box} from '@mui/material';

export default function CardList({post}) {
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  let navigate = useNavigate();
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing(container.scrollWidth > container.offsetWidth);
    }
  }, [post.title]);
  const handlemain = () => {
         navigate('/main/'+post.num);
  }

  return (
    <Card sx={{ width: {xs:'95%',sm:'40%',lg:'30%'},margin:'15px',height:'240px'}}>
      
      {/* <Link to={'/main/'+post.num} style={{textDecoration:'none'}}> */}
      <CardActionArea onClick={handlemain}>
        <CardMedia
          component="img"
          height="140px"
          image={"../"+post.category+".jpg"}
          alt="green iguana"
          />
        <CardContent sx={{padding:'10px',height:'100px'}}>
          <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{whiteSpace: 'nowrap'}} ref={containerRef}>
          {isOverflowing ? <marquee scrollamount="3">

            {post.title + " #" + post.num} 
          </marquee> : <Box>{post.title+ " #" + post.num}</Box>}
          
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {post.speaker}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // </Link>
  );
}
