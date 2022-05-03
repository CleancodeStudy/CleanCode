import calculate from './calculator'

describe('중첩 계산기 테스트', () => {
  // 덧셈
  it('1+1 = 2', () => {
    let result = calculate()
    expect(result('+', '1', '1')).toBe(2)
  })

  // 뺄셈
  it('6-3 = 3', () => {
    let result = calculate()
    expect(result('-', '6', '3')).toBe(3)
  })

  // 곱셈
  it('2*3 = 6', () => {
    let result = calculate()
    expect(result('*', '2', '3')).toBe(6)
  })

  // 나눗셈
  it('10/2 = 5', () => {
    let result = calculate()
    expect(result('/', '10', '2')).toBe(5)
  })

  // 중첩 계산
  it('(2 * 3) + 2 + 2 = 10', () => {
    let result = calculate()
    expect(result('*', '2', '3')).toBe(6)
    expect(result('+', '2', '2')).toBe(10)
  })

  // All Clear
  it('(1 * 2) + 6 / 2 => AC => 0', () => {
    let result = calculate()
    expect(result('*', '1', '2')).toBe(2)
    expect(result('/', '6', '2')).toBe(5)
    expect(result('AC')).toBe(0)
  })

  // PrintNumber
  it('(1 * 2) => PN => 2', () => {
    let result = calculate()
    expect(result('*', '1', '2')).toBe(2)
    expect(result('PN')).toBe(2)
  })

  // ThrowError
  it('올바른 형식이 아닙니다', () => {
    let result = calculate()
    expect(() => result('올바른', '형식이', '아닙니다')).toThrowError(
      '올바른 형식이 아닙니다'
    )
  })
})
