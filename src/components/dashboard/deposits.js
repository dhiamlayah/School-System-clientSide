import * as React from 'react';
 import Typography from '@mui/material/Typography';
import Title from './title';
import { Link } from 'react-router-dom';


export default function Deposits({childData}) {
 

  return (
    <React.Fragment>
        <React.Fragment>
          <Title>Student Name</Title>
          <Typography component="p" style={{ marginTop: '2vh' }} variant="h4">
                {childData.name}
          </Typography>
          <Typography color="text.secondary" style={{ marginTop: '3vh' }} sx={{ flex: 1 }}>
                {childData.classe}
           </Typography>
          <Link to={`/profile/childProfile?child=${childData.name}`}>View Profile</Link>
        </React.Fragment>
    </React.Fragment>
  );
}