import axios from 'axios'

export default class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
  }

  getOrders = async () => {
    return this.http.get(`/orders`)
  }

  storeOrder = async (event) => {
    return this.http.post(`/orders`, event)
  }

  deleteOrder = async (id) => {
    return this.http.delete(`/orders/${id}`)
  }
}