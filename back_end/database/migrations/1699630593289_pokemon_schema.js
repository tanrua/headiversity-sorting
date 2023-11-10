'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const TYPE_ENUM = [
  "BUG",
  "DARK",
  "DRAGON",
  "ELECTRIC",
  "FAIRY",
  "FIGHTING",
  "FIRE",
  "FLYING",
  "GHOST",
  "GRASS",
  "GROUND",
  "ICE",
  "NORMAL",
  "POISON",
  "PSYCHIC",
  "ROCK",
  "STEEL",
  "WATER"
]

class PokemonSchema extends Schema {
  
  up () {
    this.create('pokemon', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.enu('type', TYPE_ENUM, {
        useNative: true,
        enumName: 'pokemon_type_enum',
        existingType: false,
        schemaName: 'public'
      }).notNullable()
      table.enu('sub_type', TYPE_ENUM, {
        useNative: true,
        enumName: 'pokemon_type_enum',
        existingType: true, // we already created the enum in the previous step
        schemaName: 'public'
      })
      table.integer('total_score').notNullable()
      table.integer('hp')
      table.integer('attack')
      table.integer('defense')
      table.integer('sp_attack')
      table.integer('sp_defense')
      table.integer('speed')
      table.integer('generation')
      table.boolean('legendary').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.schema.raw('DROP TYPE IF EXISTS "pokemon_type_enum"')
    this.drop('pokemon')
  }
}

module.exports = PokemonSchema
