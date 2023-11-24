import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema as Schema } from '@ioc:Adonis/Core/Validator'
import Pokemon from 'App/Models/Pokemon'

export default class PokemonController {
  public async index({ request }: HttpContextContract) {
    const allPokemonSchema = Schema.create({
      page: Schema.number(),
      limit: Schema.number()
    })

    const validPayload = await request.validate({
      schema: allPokemonSchema,
      data: {
        page: request.input('page', 1),
        limit: request.input('limit', 25)
      }
    })

    const pokemon = await Pokemon.query()
    .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }

  public async showByGeneration({ params, request }: HttpContextContract) {
    const byGenerationSchema = Schema.create({
      generation: Schema.number([
        rules.unsigned(),
        rules.range(1,6)
      ]),
      page: Schema.number(),
      limit: Schema.number()
     })

    const validPayload = await request.validate({
      schema: byGenerationSchema,
      messages: {
        range: "You must pick a generation between 1 and 6",
      },
      data: {
        generation: params.generation,
        page: request.input('page', 1),
        limit: request.input('limit', 25)
      }
    })

    const pokemon = await Pokemon.query()
      .where('generation', validPayload.generation)
      .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }

  public async showByType({ params, request }: HttpContextContract) {
    const byTypeSchema = Schema.create({
      type: Schema.string([
        rules.exists({
          table: 'pokemon',
          column: 'type'
        })
      ]),
      page: Schema.number(),
      limit: Schema.number()
    })

    const validPayload = await request.validate({
      schema: byTypeSchema,
      messages: {
        range: "You must pick a generation between 1 and 6",
      },
      data: {
        type: params.type,
        page: request.input('page', 1),
        limit: request.input('limit', 25)
      }
    })

    const pokemon = await Pokemon.query()
      .where('type', validPayload.type)
      .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }
}