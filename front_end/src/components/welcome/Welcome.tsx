
import { Dispatch, SetStateAction } from 'react'
import BestInShow from './BestInShow'

export default function Welcome(props:{
  token:string,
  setToken:Dispatch<SetStateAction<string>>
}) {

  return (
    <BestInShow token={props.token}/>
  )
}