'use strict'

const Order = use('App/Models/Order')

class OrderController {
  // CREATE
  async store ({ request, response }) {
    const {
      date,
      name,
      ship_to,
      payment_method,
      amount
    } = request.all()

    const order = await Order.create({
      date,
      name,
      ship_to,
      payment_method,
      amount
    })

    return response.status(201).json({ order })
  }

  // READ ALL
  async index ({ response }) {
    const orders = await Order.all()

    return response.status(200).json({ orders })
  }

  // DELETE
  async delete ({  params, response }) {
    const order = await Order.find(params.id)

    await order.delete()

    return response.status(200).json({
      message: 'Order deleted successfully.'
    })
  }
}

module.exports = OrderController
