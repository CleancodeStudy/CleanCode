import { printOwing } from "./01"

describe("01-extract-function", () => {

  it("printOwing", () => {
    let tmp = '';
    jest.spyOn(console, 'log').mockImplementation((str) => tmp += str + '\n')

    const invoice = {
      customer: '통붕이',
      orders: [
        { name: '사채', amount: 100 },
        { name: '대출', amount: 1000 },
      ],
    }

    printOwing(invoice)

    expect(tmp).toBe(
      '*******************\n' +
      '***** 고객채무 *****\n' +
      '*******************\n' +
      '고객명: 통붕이\n' +
      '채무액: 1100\n' +
      '마감일: 2022. 6. 4. 오전 12:00:00\n'
    )
    
  })
})