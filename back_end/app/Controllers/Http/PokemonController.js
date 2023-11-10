'use strict'

const Pokemon = use('App/Models/Pokemon')

class PokemonController {
  async index ({ response }) {
    const pokemon = await Pokemon.all()

    return response.status(200).json({ pokemon })
  }
}

module.exports = PokemonController
