
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import PokemonTable from '../table/PokemonTable'
import SkeletonTable from '../table/SkeletonTable'

const client = axios.create({
  baseURL: 'http://localhost:3333/api/pokemon' 
})

const headCells = [
  { id: 'id',               label: 'Pokedex #'},
  { id: 'name',             label: 'Name'},
  { id: 'type',             label: 'Type'},
  { id: 'sub_type',         label: 'Sub Type'},
  { id: 'total_score',      label: 'Score'},
  { id: 'hp',               label: 'HP'},
  { id: 'attack',           label: 'Atk'},
  { id: 'defense',          label: 'Def'},
  { id: 'special_attack',   label: 'Sp.Atk'},
  { id: 'special_defense',  label: 'Sp.Def'},
];

export default function Pokemon() {
  const [pokemon, setpokemon] = React.useState(null)

  React.useEffect(() => {
    client.get().then((response) => {
      setpokemon(response.data.pokemon)
    })
  }, [])

  if (!pokemon) return (
    <SkeletonTable
      headCells={headCells}
      skeletonRowCount={25}
    />
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PokemonTable
            headCells={headCells} 
            dataset={pokemon} 
          />
        </Paper>
      </Grid>
    </Grid>
  )
}