import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Character, Gender } from '../Interfaces/character.interface';
import Chip from '@mui/material/Chip';
import React from 'react';
import'./MediaCard.css'




export  const MediaCard = React.memo(( {name, image, status, origin, gender,species} : Character)=> {
  return (
    <Card sx={{ maxWidth: 250 }} className='card'>
      <CardMedia
        sx={{ height:220 }}
        image={image}
        title={origin.name}
      />
      <div className='cardContent'>
          <div className='charDetails'>
            <div><p>{name}</p></div>
            <div className='chips'>
              <Chip label={status== 'unknown'? 'Unknown': status} variant="outlined" sx={{backgroundColor:'#1976D2', color:'white'}} />
              <Chip label={gender ==Gender.UNKNOWN ? 'Unknown': gender} variant="outlined" sx={{backgroundColor:'#1976D2', color:'white'}}/>
              <Chip label={species} variant="outlined" sx={{backgroundColor:'#1976D2', color:'white'}}/>
              <Chip label={origin.name== 'unknown'? 'Unknown': origin.name} variant="outlined" sx={{backgroundColor:'#1976D2', color:'white'}}/>
            </div>
          </div>
        
      </div>
      
    </Card>
  );
})
