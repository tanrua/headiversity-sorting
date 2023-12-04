import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema as Schema } from '@ioc:Adonis/Core/Validator'

export default class AuthController {

  public async signin({ auth, request, response }: HttpContextContract) {
    const email = request.body().email
    const password = request.body().password

    try {
      const token = await auth.use('api').attempt(email, password, {
        name: 'Headiversity React App',
        expiresIn: '2 days'
      })
      return token
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

}
