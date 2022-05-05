import { price } from "./03-1"

describe("03-extract-variable", () => {
  it("price", () => {

    const orderA = {
      itemPrice: 600,
      quantity: 3,
    }

    const orderB = {
      itemPrice: 8000,
      quantity: 2,
    }

    expect(price(orderA)).toBe(1900)
    expect(price(orderB)).toBe(16100)
  })
})