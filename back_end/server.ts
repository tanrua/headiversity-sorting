/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { createServer } from 'https'
import { Ignitor } from '@adonisjs/core/build/standalone'
import { join } from 'path'
import { readFileSync } from 'fs'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const privateKey = readFileSync(join(__dirname + '/config/sslCert/server.key'), 'utf8')
const certificate = readFileSync(join(__dirname + '/config/sslCert/server.crt'), 'utf8')

new Ignitor(__dirname).httpServer().start((handle) => {
  return createServer(
    {
      key: privateKey,
      cert: certificate,
    },
    handle
  )
}).catch(console.error)
