'use strict'

const Pokemon = use('App/Models/Pokemon')
const TYPE_ENUM = {
  BUG: "BUG",
  DARK: "DARK",
  DRAGON: "DRAGON",
  ELECTRIC: "ELECTRIC",
  FAIRY: "FAIRY",
  FIGHTING: "FIGHTING",
  FIRE: "FIRE",
  FLYING: "FLYING",
  GHOST: "GHOST",
  GRASS: "GRASS",
  GROUND: "GROUND",
  ICE: "ICE",
  NORMAL: "NORMAL",
  POISON: "POISON",
  PSYCHIC: "PSYCHIC",
  ROCK: "ROCK",
  STEEL: "STEEL",
  WATER: "WATER"
}

class PokemonController {
  async index ({ response }) {
    const pokemon = await Pokemon.all()

    return response.status(200).json({ pokemon })
  }

  async findByGeneration ({ params, response }) {
    const gen = params.generation
    if(!gen){
      const pokemon = await Pokemon.all()
      return response.status(200).json({ pokemon })
    }
    const pokemon = await Pokemon.query().where('generation', gen).fetch()

    return response.status(200).json({ pokemon })
  }

  async findChartable ({ request, response }) {
    // This validation probably doesn't work doe to the adonis version problems discovered.

    // const chartableSchema = Validator.schema.create({
    //   type: Validator.schema.enum(Object.values(TYPE_ENUM)),
    //   sorter: Validator.schema.string({ trim: true }),
    //   count: Validator.schema.number(),
    // })
    // const payload = request.validate(chartableSchema)
    
    const query_params = request.qs

    const type = query_params.type
    const sorter = query_params.sorter
    const count = query_params.count

    let pokemonQuery = Pokemon.query()

    // We do not like this query string validation. No we do not! You can do better.... but it works given even bigger root problems
    if (type){
      pokemonQuery = pokemonQuery.where('type', type)
    }

    if (sorter){
      pokemonQuery = pokemonQuery.orderBy(sorter, 'desc')
    }

    if (count){
      pokemonQuery = pokemonQuery.limit(count)
    } else {
      pokemonQuery = pokemonQuery.limit(10)
    }

    const pokemon = await pokemonQuery.fetch()
    return response.status(200).json({ pokemon })
  }
}

module.exports = PokemonController
