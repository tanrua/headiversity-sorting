export const API_BASE_URL = 'http://localhost:3333/api/pokemon'
export const AUTH_BASE_URL = 'http://localhost:3333/api/auth'

export type HeadCellProps = {
  id: string,
  label: string
}


export const HEAD_CELLS = [
  { id: 'id',               label: 'Pokedex #'},
  { id: 'name',             label: 'Name'},
  { id: 'type',             label: 'Type'},
  { id: 'sub_type',         label: 'Sub Type'},
  { id: 'total_score',      label: 'Score'},
  { id: 'hp',               label: 'HP'},
  { id: 'attack',           label: 'Atk'},
  { id: 'defense',          label: 'Def'},
  { id: 'special_attack',   label: 'Sp.Atk'},
  { id: 'special_defense',  label: 'Sp.Def'},
]

export enum TYPE_ENUM {
  "bug" = "BUG",
  "dark" = "DARK",
  "dragon" = "DRAGON",
  "electric" = "ELECTRIC",
  "fairy" = "FAIRY",
  "fighting" = "FIGHTING",
  "fire" = "FIRE",
  "flying" = "FLYING",
  "ghost" = "GHOST",
  "grass" = "GRASS",
  "ground" = "GROUND",
  "ice" = "ICE",
  "normal" = "NORMAL",
  "poison" = "POISON",
  "psychic" = "PSYCHIC",
  "rock" = "ROCK",
  "steel" = "STEEL",
  "water" = "WATER"
}
