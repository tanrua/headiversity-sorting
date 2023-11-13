export const API_BASE_URL = 'http://localhost:3333/api/pokemon'

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

export const TYPE_ENUM = {
  BUG: "BUG",
  DARK:  "DARK",
  DRAGON:  "DRAGON",
  ELECTRIC:  "ELECTRIC",
  FAIRY:  "FAIRY",
  FIGHTING:  "FIGHTING",
  FIRE:  "FIRE",
  FLYING:  "FLYING",
  GHOST:  "GHOST",
  GRASS:  "GRASS",
  GROUND:  "GROUND",
  ICE:  "ICE",
  NORMAL:  "NORMAL",
  POISON:  "POISON",
  PSYCHIC:  "PSYCHIC",
  ROCK:  "ROCK",
  STEEL:  "STEEL",
  WATER:  "WATER"
}
