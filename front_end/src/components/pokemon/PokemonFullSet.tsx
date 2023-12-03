
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import PokemonTable from '../table/PokemonTable'
import SkeletonTable from '../table/SkeletonTable'

import { API_BASE_URL, HEAD_CELLS } from '../../constants/pokemonTableConstants'

const client = axios.create({
  baseURL: API_BASE_URL 
})

export default function PokemonFullSet() {
  const [pokemon, setpokemon] = React.useState([])

  React.useEffect(() => {
    client.get('?limit=1000').then((response) => {
      setpokemon(response.data.data)
    })
  }, [])

  if (!pokemon || pokemon.length == 0) return (
    <SkeletonTable
      skeletonRowCount={25}
    />
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PokemonTable
            key={0}
            headCells={HEAD_CELLS} 
            dataset={pokemon} 
          />
        </Paper>
      </Grid>
    </Grid>
  )
}