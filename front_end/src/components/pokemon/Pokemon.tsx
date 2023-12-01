
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import PokemonTable from '../table/PokemonTable'
import SkeletonTable from '../table/SkeletonTable'

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


export default function Pokemon(
  generation: number,
  dataset: Array<any>
) {
  const [pokemon, setpokemon] = React.useState(dataset)

  React.useEffect(() => {
      setpokemon(dataset)
  }, [dataset])

  if (!dataset) return (
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
            key={generation}
            headCells={headCells}
            dataset={pokemon} 
          />
        </Paper>
      </Grid>
    </Grid>
  )
}