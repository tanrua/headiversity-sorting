
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import PokeChart from '../chart/PokeChart'
import { TYPE_ENUM } from '../../constants/pokemonTableConstants'

export default function BestInShow() {
  const displayCount = 10

  return (
      <Grid key='typechart_container' container spacing={2}>
        {Object.keys(TYPE_ENUM).map((type) => {
          return (
            <Grid key={'grid-'+type} item xs={12} md={12} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 500,
                }}
              >
                <PokeChart 
                  type={type} 
                  count={displayCount} 
                  sortStat='total_score'/>
              </Paper>
            </Grid>
          )
        })
      }      
    </Grid>
  )
}