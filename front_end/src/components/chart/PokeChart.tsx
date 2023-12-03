import * as React from 'react'
import { useTheme, Typography } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, Label, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'
import { API_BASE_URL, HEAD_CELLS } from '../../constants/pokemonTableConstants'

const client = axios.create({
  baseURL: API_BASE_URL
})

export default function PokeChart( props:{
  type: string,
  count: number,
  sortStat: string
}) {
  const theme = useTheme()

  const [pokemon, setpokemon] = React.useState([])

  React.useEffect(() => {
    client.get('/chart?type='+props.type+'&sorter='+props.sortStat+'&count='+props.count).then((response) => {
      setpokemon(response.data.pokemon)
    })
  }, [props.sortStat, props.count])

  return (
    <React.Fragment>
      <Typography component='h2' variant='h6' color='primary' gutterBottom>
        Top {props.count} Best for {props.type} type
      </Typography>
      <ResponsiveContainer>
        <BarChart
          key={'pokechart-'+props.type}
          data={pokemon}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Power
            </Label>
          </YAxis>
          <Legend />
          <Bar dataKey="hp" stackId="poke" fill="#FF0000" />
          <Bar dataKey="attack" stackId="poke" fill="#F08030" />
          <Bar dataKey="defense" stackId="poke" fill="#F8D030" />
          <Bar dataKey="sp_attack" stackId="poke" fill="#6890F0" />
          <Bar dataKey="sp_defense" stackId="poke" fill="#78C850" />
          <Bar dataKey="speed" stackId="poke" fill="#F85888" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
