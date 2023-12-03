import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pokemon extends BaseModel {
  public static TYPE_VALUES: string[] = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"
  ]

  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name: string

  @column()
  public type: string

  @column()
  public sub_type: string

  @column()
  public total_score: number

  @column()
  public hp: number

  @column()
  public attack: number

  @column()
  public defense: number

  @column()
  public sp_attack: number

  @column()
  public sp_defense: number

  @column()
  public speed: number

  @column()
  public generation: number

  @column()
  public legendary: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
