import { reportLines } from "./02-2"

describe("02-inline-function", () => {
  it("reportLines", () => {
    const customerA = { name: 'roy', location: 'seoul' }
    const customerB = { name: 'jay', location: 'incheon' }

    expect(reportLines(customerA)).toEqual([['name', 'roy'], ['location', 'seoul']])
    expect(reportLines(customerB)).toEqual([['name', 'jay'], ['location', 'incheon']])
  })
})