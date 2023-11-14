'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('api/pokemon', 'PokemonController.index')

// Given more time and a re-do with the proper version of Adonis I could actually get something done with auth
Route.get('api/pokemon/gen/:generation?', 'PokemonController.findByGeneration').middleware('guest')
Route.get('api/pokemon/chart', 'PokemonController.findChartable').middleware('guest')