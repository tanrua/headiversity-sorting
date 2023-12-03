import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema as Schema } from '@ioc:Adonis/Core/Validator'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Pokemon from 'App/Models/Pokemon'

export default class PokemonController {
  private DEFAULT_PAGE:number = 1
  private DEFAULT_LIMIT:number = 200

  public async index({ request }: HttpContextContract): Promise<ModelPaginatorContract<Pokemon>> {
    const allPokemonSchema = Schema.create({
      page: Schema.number(),
      limit: Schema.number()
    })

    const validPayload = await request.validate({
      schema: allPokemonSchema,
      data: {
        page: request.input('page', this.DEFAULT_PAGE),
        limit: request.input('limit', this.DEFAULT_LIMIT)
      }
    })

    const pokemon = await Pokemon.query()
    .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }

  public async showByGeneration({ params, request }: HttpContextContract): Promise<ModelPaginatorContract<Pokemon>> {
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
        page: request.input('page', this.DEFAULT_PAGE),
        limit: request.input('limit', this.DEFAULT_LIMIT)
      }
    })

    const pokemon = await Pokemon.query()
      .where('generation', validPayload.generation)
      .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }

  public async showByType({ params, request }: HttpContextContract): Promise<ModelPaginatorContract<Pokemon>> {
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
        'type': "You must pick a valid type",
      },
      data: {
        type: params.type,
        page: request.input('page', this.DEFAULT_PAGE),
        limit: request.input('limit', this.DEFAULT_LIMIT)
      }
    })

    const pokemon = await Pokemon.query()
      .where('type', validPayload.type)
      .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }

  public async showByTypeAndStat({ request }: HttpContextContract): Promise<ModelPaginatorContract<Pokemon>> {
    const byTypeSchema = Schema.create({
      type: Schema.string([
        rules.exists({
          table: 'pokemon',
          column: 'type'
        })
      ]),
      stat: Schema.enum([
        "total_score",
        "hp",
        "attack",
        "defense",
        "sp_attack",
        "sp_defense",
        "speed",
      ] as const),
      page: Schema.number(),
      limit: Schema.number([
        rules.unsigned(),
        rules.range(1, 20),
      ])
    })

    const validPayload = await request.validate({
      schema: byTypeSchema,
      messages: {
        'type': 'You must pick a valid type',
        range: 'Number of pokemon to display must be between {{ options.start }} and {{ options.stop }}',
        enum: 'The value of {{ field }} must be in {{ options.choices }}'
      },
      data: {
        type: request.input('type'),
        stat: request.input('stat'),
        page: request.input('page', this.DEFAULT_PAGE),
        limit: request.input('limit', 5)
      }
    })

    const pokemon = Pokemon.query()
      .where('type', validPayload.type)
      .orderBy(validPayload.stat, 'desc')
      .paginate(validPayload.page, validPayload.limit)

    return pokemon
  }
}