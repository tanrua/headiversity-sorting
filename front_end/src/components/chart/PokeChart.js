import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { BarChart, Bar, XAxis, YAxis, Label, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'
import Title from './Title'
import { API_BASE_URL, HEAD_CELLS } from '../../constants/pokemonTableConstants'

const client = axios.create({
  baseURL: API_BASE_URL
})

export default function PokeChart({
  type,
  count,
  sortStat
}) {
  const theme = useTheme()

  const [pokemon, setpokemon] = React.useState(null)
  React.useEffect(() => {
    client.get('/chart?type='+type+'&sorter='+sortStat+'&count='+count).then((response) => {
      setpokemon(response.data.pokemon)
    })
  }, [sortStat, count])

  return (
    <React.Fragment>
      <Title>Top {count} Best for {type} type </Title>
      <ResponsiveContainer>
        <BarChart
          key={'pokechart-'+type}
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
