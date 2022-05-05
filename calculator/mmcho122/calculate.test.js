import calculate from './calculate'

describe('calculator test', () => {
  // plus
  it('1 + 3 = 4', () => {
    const result = calculate() //
    expect(result('+', 1, 3)).toBe(4)
  })

  // minus
  it('5 - 2 = 3', () => {
    const result = calculate()
    expect(result('-', '5', '2')).toBe(3)
  })

  // times
  it('2 * 3 = 6', () => {
    const result = calculate()
    expect(result('*', '2', '3')).toBe(6)
  })

  // divided
  it('10 / 2 = 5', () => {
    const result = calculate()
    expect(result('/', '10', '2')).toBe(5)
  })

  it('(5 * 2) + 3 + 7 = 20', () => {
    const result = calculate()
    expect(result('*', '5', '2')).toBe(10)
    expect(result('+', '3', '7')).toBe(20)
  })

  // clear
  it('(4 * 2) + 8 / 2 => AC => 0', () => {
    const result = calculate()
    expect(result('*', '4', '2')).toBe(8)
    expect(result('/', '8', '2')).toBe(12)
    expect(result('AC')).toBe(0)
  })

  // printNumber
  it('(1 * 2) => PN => 2', () => {
    const result = calculate()
    expect(result('*', '1', '2')).toBe(2)
    expect(result('PN')).toBe(2)
  })

  // error
  it('숫자를 먼저 입력하세요', () => {
    const result = calculate()
    expect(() => result('/', '6', '4')).toThrowError('숫자를 먼저 입력하세요')
  })
})
