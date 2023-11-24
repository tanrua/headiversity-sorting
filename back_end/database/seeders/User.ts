import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'simeon@email.com',
        password: 'password123',
      },
      {
        email: 'admin@email.com',
        password: 'supersecret'
      }
    ])
  }
}
