import { defaultOwnerData } from "./06-1-1_defaultOwner"

describe("06-encapsulate-variable", () => {
  it("defaultOwnerData", () => {
    expect(defaultOwnerData).toEqual({ firstName: '마틴', lastName: '파울러' })
  })
})
