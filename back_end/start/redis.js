'use strict'

/*
|--------------------------------------------------------------------------
| Redis
|--------------------------------------------------------------------------
|
| node ace make:prldfile redis and `adonis make:prldfile redis`
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})