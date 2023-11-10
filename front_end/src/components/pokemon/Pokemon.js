
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from "axios"
import PokemonTable from '../table/PokemonTable'

const client = axios.create({
  baseURL: "http://localhost:3333/api/pokemon" 
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
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    client.get().then((response) => {
      setpokemon(response.data.pokemon)
    })
    setLoading(false)
  }, [])

  if (!pokemon) return "AAAAA"

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PokemonTable
            headCells={headCells} 
            dataset={pokemon} 
            loading={loading} 
            setLoading={setLoading}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}