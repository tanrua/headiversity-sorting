import { PropsWithChildren } from 'react'
import Typography from '@mui/material/Typography'

type TitleProps = {
  count: number,
  type: string
}

function Title(props: PropsWithChildren<TitleProps>) {
  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {props.children}
    </Typography>
  )
}

export default Title
