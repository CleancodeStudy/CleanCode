import { priceOrder } from "./11-1"
import { products } from "./products"

describe("11-split-phase", () => {
  it("priceOrder", () => {
    const shippingMethod = {
      discountFee: 0.1,
      feePerCase: 0.03,
      discountThreshold: 0.12,
    }

    const result = products.map(product =>
      priceOrder(product, 10, shippingMethod)
    )

    expect(result).toEqual([27031, 38409, 20001, 31553.5, 45546])
  })
})



