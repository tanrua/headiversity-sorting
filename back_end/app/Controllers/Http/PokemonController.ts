import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema as Schema } from '@ioc:Adonis/Core/Validator'
import Pokemon from 'App/Models/Pokemon'

export default class PokemonController {
  public async index(ctx: HttpContextContract) {
    const pokemon = await Pokemon.all()
    return pokemon
  }

  public async showByGeneration({ params, request }: HttpContextContract) {
    const byGenerationSchema = Schema.create({
      generation: Schema.number([
        rules.unsigned(),
        rules.range(1,6)
      ])
     })

    const validPayload = await request.validate({
      schema: byGenerationSchema,
      messages: {
        range: "You must pick a generation between 1 and 6",
      },
      data: {
        generation: params.generation
      }
    })

    const pokemon = await Pokemon.query().where('generation', validPayload.generation)

    return pokemon
  }

  public async showByType({ params, request }: HttpContextContract) {
    const byTypeSchema = Schema.create({
      type: Schema.string([
        rules.exists({
        table: 'pokemon',
        column: 'type'
        })
      ])
     })

    const validPayload = await request.validate({
      schema: byTypeSchema,
      messages: {
        exists: "You must pick a valid type",
      },
      data: {
        type: params.type
      }
    })

    const pokemon = await Pokemon.query().where('type', validPayload.type)

    return pokemon
  }
}