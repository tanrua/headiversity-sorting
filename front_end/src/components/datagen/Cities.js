import * as React from 'react';
import { useParams } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Cities(props) {
  let { city } = useParams()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <h1>ADD YOUR CITY HERE: {city} </h1>
        </Paper>
      </Grid>
    </Grid>
  )
}