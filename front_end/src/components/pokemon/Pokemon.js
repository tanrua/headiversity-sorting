
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from "axios";
import PokemonTable from '../table/PokemonTable';

const client = axios.create({
  baseURL: "http://localhost:3333/api/pokemon" 
});

export default function Pokemon() {
  const [pokemon, setpokemon] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    client.get().then((response) => {
      setpokemon(response.data.pokemon);
    });
    setLoading(false)
  }, [])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PokemonTable 
            dataset={pokemon} 
            loading={loading} 
            setLoading={setLoading}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}