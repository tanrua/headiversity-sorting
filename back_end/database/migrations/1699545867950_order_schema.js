'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamp('date', { useTz: true })
      table.string('name', 255).notNullable()
      table.string('ship_to', 255).notNullable()
      table.string('payment_method').defaultTo('VISA')
      table.decimal('amount', 8, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
