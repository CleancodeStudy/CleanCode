import { inNewEngland } from "./05-2"

describe("05-change-function-declaration", () => {
  it("inNewEngland", () => {

    const someCustomers = [
      {
        name: 'roy',
        address: { state: 'MA' },
      },
      {
        name: 'jay',
        address: { state: 'CT' },
      },
      {
        name: 'kay',
        address: { state: 'ME' },
      },
      {
        name: 'kai',
        address: { state: 'NONE' },
      },
      {
        name: 'roi',
        address: { state: 'VT' },
      },
      {
        name: 'rai',
        address: { state: 'NH' },
      },
      {
        name: 'rey',
        address: { state: 'RI' },
      },
    ]

    const newEnglanders = someCustomers.filter(c => inNewEngland(c))

    expect(newEnglanders).toEqual([{ address: { state: 'MA' }, name: "roy" }, { address: { state: 'CT' }, name: "jay" }, { address: { state: 'ME' }, name: "kay" }, { address: { state: 'VT' }, name: "roi" }, { address: { state: 'NH' }, name: "rai" }, { address: { state: 'RI' }, name: "rey" }])
  })
})