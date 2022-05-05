import { rating } from "./02-1"

describe("02-inline-function", () => {
  it("rating", () => {
    const DriverA = { name: 'A', numberOfLateDeliveries: 10 }
    const DriverB = { name: 'B', numberOfLateDeliveries: 4 }

    expect(rating(DriverA)).toBe(2)
    expect(rating(DriverB)).toBe(1)
  })
})