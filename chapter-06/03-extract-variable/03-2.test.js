import { Order } from "./03-2"

describe("03-extract-variable", () => {
  it("Order", () => {

    const orderA = new Order({
      itemPrice: 600,
      quantity: 3,
    })

    const orderB = new Order({
      itemPrice: 8000,
      quantity: 2,
    })

    expect(orderA.price).toBe(1900)
    expect(orderB.price).toBe(16100)
  })
})