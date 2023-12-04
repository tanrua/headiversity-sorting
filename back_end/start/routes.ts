import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('api/pokemon/', async (ctx) => {
  const { default: PokemonController } = await import(
    'App/Controllers/Http/PokemonController'
  )
  return new PokemonController().index(ctx)
})

Route.get('api/pokemon/gen/:generation', async (ctx) => {
  const { default: PokemonController } = await import(
    'App/Controllers/Http/PokemonController'
  )
  return new PokemonController().showByGeneration(ctx)
})

Route.get('api/pokemon/type/:type', async (ctx) => {
  const { default: PokemonController } = await import(
    'App/Controllers/Http/PokemonController'
  )
  return new PokemonController().showByType(ctx)
})

Route.get('api/pokemon/chart', async (ctx) => {
  const { default: PokemonController } = await import(
    'App/Controllers/Http/PokemonController'
  )
  return new PokemonController().showByTypeAndStat(ctx)
})

Route.post('api/auth/signin', async (ctx) => {
  const { default: AuthController } = await import(
    'App/Controllers/Http/AuthController'
  )
  return new AuthController().signin(ctx)
})