
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import PokeChart from '../chart/PokeChart'
import Deposits from '../dashboard/Deposits'
import Orders from '../dashboard/Orders'
import { TYPE_ENUM } from '../../constants/pokemonTableConstants'
import BestInShow from './BestInShow'

export default function Welcome() {

  return (
    <BestInShow />
  )
}