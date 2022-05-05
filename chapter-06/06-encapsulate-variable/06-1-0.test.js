import { defaultOwner } from "./06-1-0"

describe("06-encapsulate-variable", () => {
  it("defaultOwner", () => {
    expect(defaultOwner).toEqual({ firstName: '레베카', lastName: '파슨스' })
  })
})
