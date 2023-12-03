
import * as React from 'react'
import { Grid, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import PokeChart from '../chart/PokeChart'
import { TYPE_ENUM, HEAD_CELLS } from '../../constants/pokemonTableConstants'

export default function BestInShow() {
  const [sortStat, setSortStat] = React.useState('total_score')
  const [displayCount, setDisplayCount] = React.useState(10)

  const handleChangeSortStat = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setSortStat(value);
  }

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">How do you want to sort your Pokemon?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={sortStat}
          onChange={handleChangeSortStat}
        >
          <FormControlLabel value="total_score" control={<Radio />} label="Score" />
          <FormControlLabel value="hp" control={<Radio />} label="HP" />
          <FormControlLabel value="attack" control={<Radio />} label="Attack" />
          <FormControlLabel value="defense" control={<Radio />} label="Defense" />
          <FormControlLabel value="speed" control={<Radio />} label="Speed" />
        </RadioGroup>
      </FormControl>
      <Grid key='typechart_container' container spacing={2}>
        {
          Object.keys(TYPE_ENUM).map((type) => {
            return (
              <Grid key={'grid-'+type} xs={12} md={12} lg={8}>
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
                    sortStat={sortStat}
                  />
                </Paper>
              </Grid>
            )
          })
        }      
      </Grid>
    </div>
  )
}