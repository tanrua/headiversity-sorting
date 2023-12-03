import * as React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LooksOne from '@mui/icons-material/LooksOne'
import LooksTwo from '@mui/icons-material/LooksTwo'
import Looks3 from '@mui/icons-material/Looks3'
import Looks4 from '@mui/icons-material/Looks4'
import Looks5 from '@mui/icons-material/Looks5'
import Looks6 from '@mui/icons-material/Looks6'
import QueryStats from '@mui/icons-material/QueryStats'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton component={Link} to='/signin'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Sign In' />
    </ListItemButton>
    <ListItemButton component={Link} to='/pokemon'>
      <ListItemIcon>
        <QueryStats />
      </ListItemIcon>
      <ListItemText primary='Pokemon List' />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Pokemon by Generation
    </ListSubheader>
    <ListItemButton component={Link} to='/pokemon/1'>
      <ListItemIcon>
        <LooksOne />
      </ListItemIcon>
      <ListItemText primary='Gen 1' />
    </ListItemButton>

    <ListItemButton component={Link} to='/pokemon/2'>
      <ListItemIcon>
        <LooksTwo />
      </ListItemIcon>
      <ListItemText primary='Gen 2' />
    </ListItemButton>

    <ListItemButton component={Link} to='/pokemon/3'>
      <ListItemIcon>
        <Looks3 />
      </ListItemIcon>
      <ListItemText primary='Gen 3' />
    </ListItemButton>

    <ListItemButton component={Link} to='/pokemon/4'>
      <ListItemIcon>
        <Looks4 />
      </ListItemIcon>
      <ListItemText primary='Gen 4' />
    </ListItemButton>

    <ListItemButton component={Link} to='/pokemon/5'>
      <ListItemIcon>
        <Looks5 />
      </ListItemIcon>
      <ListItemText primary='Gen 5' />
    </ListItemButton>

    <ListItemButton component={Link} to='/pokemon/6'>
      <ListItemIcon>
        <Looks6 />
      </ListItemIcon>
      <ListItemText primary='Gen 6' />
    </ListItemButton>
  </React.Fragment>
)
