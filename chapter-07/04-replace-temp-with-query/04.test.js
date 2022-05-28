import { Order } from './04'

it('Order price should be 9500', () => {
  const order = new Order(10, { price: 1000 })

  expect(order.price).toBe(9500)
})
