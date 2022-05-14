import TypeChecker from './typeChecker'

const typeChecker = new TypeChecker()

describe('TypeChecker', () => {
  describe('checkType()', () => {
    it('1은 타입이 숫자이다.', () => {
      expect(typeChecker.checkType(1, 'number')).toBe(true)
    })

    it('1은 타입이 문자열이 아니다.', () => {
      expect(typeChecker.checkType(1, 'string')).toBe(false)
    })

    it('"1"은 타입이 문자열이다.', () => {
      expect(typeChecker.checkType('1', 'string')).toBe(true)
    })

    it('"1"은 타입이 숫자가 아니다.', () => {
      expect(typeChecker.checkType('1', 'number')).toBe(false)
    })
  }) // -- checkType()

  describe('checkAllTypes()', () => {
    it('1, 2, 5, 7은 타입이 모두 숫자이다.', () => {
      expect(typeChecker.checkAllTypes([1, 2, 5, 7], 'number')).toBe(true)
    })

    it('"1", "2", "5", "7"은 타입이 모두 문자열이다.', () => {
      expect(typeChecker.checkAllTypes(['1', '2', '5', '7'], 'string')).toBe(true) // prettier-ignore
    })

    it('1, "2", "5", 7은 타입이 모두 숫자가 아니다.', () => {
      expect(typeChecker.checkAllTypes([1, '2', '5', 7], 'number')).toBe(false)
    })
  }) // -- checkAllTypes()
})
