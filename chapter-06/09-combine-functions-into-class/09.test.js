import { client1, client2, client3 } from "./09"

describe("09-combine-functions-into-class", () => {
  it("baseRate", () => {
    const result = [client1, client2, client3].map(c => c())
    expect(result).toEqual([220, 218.3, 220])
  })
})



