import Calculator from "./calculate"

describe("계산기 테스트", () => {

  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it("1 + 2 = 3", () => {
    const result = calculator.calculate('+', 1, 2)
    expect(result).toBe(3)
  })

  it("1 - 2 = -1", () => {
    const result = calculator.calculate('-', 1, 2)

    expect(result).toBe(-1)
  })

  it("2 * 3 = 6", () => {
    const result = calculator.calculate('*', 2, 3)

    expect(result).toBe(6)
  })

  it("6 / 3 = 2", () => {
    const result = calculator.calculate('/', 6, 3)

    expect(result).toBe(2)
  })

  it("6 / 4 = 1", () => {
    const result = calculator.calculate('/', 6, 4)

    expect(result).toBe(1)
  })

  it("(6 / 4) + 6 = 7", () => {
    calculator.calculate('/', 6, 4)
    calculator.calculate('+', 6)

    expect(calculator.result).toBe(7)
  })

  it("(6 / 4) + 6 -> AC = 0", () => {
    calculator.calculate('/', 6, 4)
    calculator.calculate('+', 6)

    expect(calculator.result).toBe(7)

    calculator.allClear()
    expect(calculator.result).toBe(0)
  })

  it("1 + 2 = 3 / result: 3", () => {
    let tmp = ''
    jest.spyOn(console, 'log').mockImplementation((str) => tmp = str);

    calculator.calculate('+', 1, 2)
    calculator.printNumber()

    expect(tmp).toBe("result: 3")
  })

  it("not a number throw Error", () => {
    expect(() => calculator.calculate('/', 6, '4')).toThrowError('one of them is not a number!')
  })
})