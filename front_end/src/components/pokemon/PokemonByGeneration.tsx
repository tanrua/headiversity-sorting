
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import PokemonTable from '../table/PokemonTable'
import SkeletonTable from '../table/SkeletonTable'
import { useParams } from 'react-router-dom'
import { API_BASE_URL, HEAD_CELLS } from '../../constants/pokemonTableConstants'

const client = axios.create({
  baseURL: API_BASE_URL
})

type PokeParams = {
  generation: string
}

export default function PokemonByGeneration() {
  const { generation } = useParams<PokeParams>()
  const [pokemon, setpokemon] = React.useState(null)
  const [gen, setGen] = React.useState<string>('')

  React.useEffect(() => {
    client.get('/gen/'+generation!).then((response) => {
      setpokemon(response.data.pokemon)
      setGen(generation!)
    })
  }, [generation!])

  if (!pokemon) return (
    <SkeletonTable
      headCells={HEAD_CELLS}
      skeletonRowCount={25}
    />
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PokemonTable
            key={gen}
            headCells={HEAD_CELLS} 
            dataset={pokemon} 
          />
        </Paper>
      </Grid>
    </Grid>
  )
}