
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';



export default function Signin() {
  type Auth = {
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
  }

  const [username, setUsername] = React.useState('null')
  const [password, setPassword] = React.useState('')
  const [isError, setError] = React.useState(false)
  const [helperText, setHelperText] = React.useState("Sign in Successfull")
  const [isButtonDisabled, setButtonDisabled] = React.useState(true)

  React.useEffect(() => {
    if (username.trim() && password.trim()) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [username, password]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSignin = () => {
    console.log("TODO: Implement handleSignin")
  }

  return (
    <Grid key='signin_container' container>
      <Grid key='signin' item xs={12}>
        <form noValidate autoComplete="off">
          <Card>
            <CardHeader title="Sign In to the Poor Man's Pokedex" />
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