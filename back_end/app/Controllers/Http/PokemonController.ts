import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pokemon from 'App/Models/Pokemon'

export default class PokemonController {
  public async index(ctx: HttpContextContract) {
    const pokemon = await Pokemon.all()
    return pokemon
  }

  public async showByGeneration(ctx: HttpContextContract) {
    const gen = ctx.params.generation

    const pokemon = await Pokemon.findBy('generation', gen)

    return pokemon
  }
}