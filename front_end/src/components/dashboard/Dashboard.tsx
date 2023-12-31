import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { mainListItemsAuthorized, mainListItemsUnAuthorized, secondaryListItems } from './listItems'

import Copyright from './Copyright'
import Welcome from '../welcome/Welcome'
import Signin from '../auth/Signin'
import PokemonFullSet from '../pokemon/PokemonFullSet'
import PokemonByGeneration from '../pokemon/PokemonByGeneration'
import { AppBar, Drawer } from './StyledElements'

const drawerWidth = 240
const defaultTheme = createTheme()

export default function Dashboard() {
  const [isOpen, setOpen] = React.useState(true)
  const [authToken, setAuthToken] = React.useState('')

  const toggleDrawer = () => {
    setOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={isOpen} drawerWidth={drawerWidth}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(isOpen && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Poor Man's Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={isOpen} drawerWidth={drawerWidth}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {authToken == '' ? (
            <List component='nav'>
              {mainListItemsUnAuthorized}
            </List>
          ) : (
            <List component='nav'>
              {mainListItemsAuthorized}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          )}
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
              <Routes>
                <Route path='/signin' element={<Signin token={authToken} setToken={setAuthToken} />} />

                <Route path='/' element={<Welcome token={authToken} setToken={setAuthToken} />} />
                <Route path='/pokemon' element={<PokemonFullSet token={authToken}/>} />
                <Route path='/pokemon/:generation' element={<PokemonByGeneration token={authToken} />} />
              </Routes>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
