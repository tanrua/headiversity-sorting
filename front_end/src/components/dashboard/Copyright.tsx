import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

type CopyrightProps = {
  sx: {
    pt: number
  }
}

function Copyright(props: CopyrightProps) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' to='https://github.com/tanrua/headiversity-sorting'>
        Simeon Gordon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright