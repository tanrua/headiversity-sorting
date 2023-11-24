import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pokemon'

  private TYPE_ENUM = [
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

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.enu('type', this.TYPE_ENUM, {
        useNative: true,
        enumName: 'pokemon_type_enum',
        existingType: false,
        schemaName: 'public'
      }).notNullable()
      table.enu('sub_type', this.TYPE_ENUM, {
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
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.raw('DROP TYPE IF EXISTS "pokemon_type_enum"')
    this.schema.dropTable(this.tableName)
  }
}
