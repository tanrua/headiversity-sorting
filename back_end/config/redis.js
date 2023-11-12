'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  connection: Env.get('REDIS_CONNECTION'),

  connections: {
    local: {
      host: Env.get('REDIS_HOST'),
      port: Env.get('REDIS_PORT'),
      password: Env.get('REDIS_PASSWORD', ''),
      db: 0,
      keyPrefix: '',
    },
  },
}