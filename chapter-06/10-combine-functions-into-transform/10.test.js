import { client1, client2, client3 } from "./10"

describe("10-combine-functions-into-transform", () => {
  it("baseRate", () => {
    const result = [client1, client2, client3].map(c => c())
    expect(result).toEqual([220, 218.3, 220])
  })
})



