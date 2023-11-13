import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { BarChart, Bar, XAxis, YAxis, Label, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'
import Title from './Title'
import { API_BASE_URL, HEAD_CELLS } from '../../constants/pokemonTableConstants'

// Generate POKE Data
function createData(id, name, type, sub_type, total_score, hp, attack, defense, sp_attack, sp_defense, speed, generation, legendary) {
  return { id, name, type, sub_type, total_score, hp, attack, defense, sp_attack, sp_defense, speed, generation, legendary }
}

const data = [
createData(584, "Vanilluxe", "ICE",null, 535, 71, 95, 85, 110, 95, 79, 5,   false),
createData(585, "Deerling", "NORMAL", "GRASS", 335, 60, 60, 50, 40, 50, 75, 5,   false),
createData(586, "Sawsbuck", "NORMAL", "GRASS", 475, 80, 100, 70, 60, 70, 95, 5,   false),
createData(587, "Emolga", "ELECTRIC", "FLYING", 428, 55, 75, 60, 75, 60, 103, 5,   false),
createData(588, "Karrablast", "BUG", null, 315, 50, 75, 45, 40, 45, 60, 5,   false),
createData(589, "Escavalier", "BUG", "STEEL", 495, 70, 135, 105, 60, 105, 20, 5,   false),
createData(590, "Foongus", "GRASS", "POISON", 294, 69, 55, 45, 55, 55, 15, 5,   false),
createData(591, "Amoonguss", "GRASS", "POISON", 464, 114, 85, 70, 85, 80, 30, 5,   false),
createData(592, "Frillish", "WATER", "GHOST", 335, 55, 40, 50, 65, 85, 40, 5,   false)
]

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
  }, [])

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
