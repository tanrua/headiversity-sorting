import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Cities() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <h1>ADD YOUR CITY HERE</h1>
        </Paper>
      </Grid>
    </Grid>
  )
}