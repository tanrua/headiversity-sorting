import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import { AUTH_BASE_URL } from '../../constants/pokemonTableConstants'
import { useNavigate } from 'react-router-dom';

const client = axios.create({
  baseURL: AUTH_BASE_URL
})

export default function Signin(props:{
  token:string,
  setToken:Dispatch<SetStateAction<string>>
}) {
  const [email, setEmail] = useState('null')
  const [password, setPassword] = useState('')
  const [isError, setError] = useState(false)
  const [helperText, setHelperText] = useState("Sign in Successfull")
  const [isButtonDisabled, setButtonDisabled] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [email, password]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSignin = () => {
    client.post('/signin', {
      email: email,
      password: password
    }
    ).then((response) => {
      props.setToken(response.data.token)
      navigate('/')
    }).catch(function(error){
      console.log('problems with authentication')
      console.log(error)
    })
  }

  return (
    <Grid key='signin_container' container>
      <Grid key='signin' item xs={12}>
        <form noValidate autoComplete="off">
          <Card>
            <CardHeader title="Sign In to the Poor Man's Pokedex" />
            <CardHeader title={props.token} />
            <CardContent>
              <div>
                <TextField
                  error={isError}
                  fullWidth
                  id="emai"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  margin="normal"
                  onChange={handleUsernameChange}
                />

                <TextField
                  error={isError}
                  fullWidth
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  margin="normal"
                  helperText={helperText}
                  onChange={handlePasswordChange}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                fullWidth
                onClick={handleSignin}
                disabled={isButtonDisabled}>
                Sign In
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  )
}