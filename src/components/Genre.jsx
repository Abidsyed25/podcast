import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
const Genre = ({ genre }) => {
    let navigate = useNavigate();
    const handlemain2 = (e) => {
            navigate('/genre/' + genre.name);
    }
  return (
    <Card sx={{ width: {xs:'20%',sm:'20%',lg:'20%'},margin:'10px',height:'140px'}}>
        <CardActionArea onClick={handlemain2}>
      <CardMedia
        component="img"
        alt={`Genre: ${genre.name}`}
        height="140"
        image={`${genre.url}`}
        sx={{ opacity: 0.8 }}
      />
      <CardContent>
        <Typography variant="p" component="div" align="center" sx={{
            width:'auto',
            color: '#fff', // Set text color to white
            fontSize: {xs:'1rem',sm:'1.2rem'}, // Increase font size
            fontWeight: 'bold', // Make text bold
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow
          }} style={{ position: 'absolute', top: 70, left: 0, right: 0, textAlign: 'center' }}>
          {genre.name}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Genre;
