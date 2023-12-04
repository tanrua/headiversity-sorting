
import { Dispatch, SetStateAction } from 'react'
import BestInShow from './BestInShow'
import Signin from '../auth/Signin'

export default function Welcome(props:{
  token:string,
  setToken:Dispatch<SetStateAction<string>>
}) {

  if(props.token != ''){
    return( <BestInShow token={props.token}/> )
  } else {
    return( <Signin token={props.token} setToken={props.setToken} /> )
  }
}