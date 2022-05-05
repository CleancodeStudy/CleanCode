import Calculator from './calculator'
import TypeChecker from './typeChecker'

const typeChecker = new TypeChecker()
const calculator = new Calculator(typeChecker)

describe('Calculator', () => {
  describe('add()', () => {
    it('1 + 1 = 2이다.', () => {
      expect(calculator.add(1, 1)).toBe(2)
    })

    it('숫자가 아닌 값을 넣으면 에러를 발생시킨다.', () => {
      expect(() => calculator.add('1', true)).toThrowError(
        '숫자만 입력하셔야 합니다.'
      )
    })
  }) // -- add()

  describe('substract()', () => {
    it('5 - 3 = 2이다.', () => {
      expect(calculator.substract(5, 3)).toBe(2)
    })

    it('숫자가 아닌 값을 넣으면 에러를 발생시킨다.', () => {
      expect(() => calculator.substract('1', true)).toThrowError(
        '숫자만 입력하셔야 합니다.'
      )
    })
  }) // -- substract()

  describe('multiply()', () => {
    it('3 x 4 = 12이다.', () => {
      expect(calculator.multiply(3, 4)).toBe(12)
    })

    it('숫자가 아닌 값을 넣으면 에러를 발생시킨다.', () => {
      expect(() => calculator.multiply('1', true)).toThrowError(
        '숫자만 입력하셔야 합니다.'
      )
    })
  }) // -- multiply()

  describe('divide()', () => {
    it('5 / 2 = 2이다.', () => {
      expect(calculator.divide(5, 2)).toBe(2)
    })

    it('0으로 나눌 수  없다.', () => {
      expect(() => calculator.divide(3, 0)).toThrowError(
        '0으로 나눌 수 없습니다.'
      )
    })

    it('숫자가 아닌 값을 넣으면 에러를 발생시킨다.', () => {
      expect(() => calculator.divide('1', true)).toThrowError(
        '숫자만 입력하셔야 합니다.'
      )
    })
  }) // -- divide()
}) // -- Calculator
