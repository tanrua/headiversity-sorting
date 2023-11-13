'use strict'

const Pokemon = use('App/Models/Pokemon')

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
    const query_params = request.qs
    const sorter = query_params.sorter
    const type = query_params.type
    const count = query_params.count

    const pokemon = await Pokemon.query().where('type', type).orderBy(sorter, 'desc').limit(count).fetch()

    return response.status(200).json({ pokemon })
  }
}

module.exports = PokemonController
