export default class Calculator {
  constructor(typeChecker) {
    this.typeChecker = typeChecker
  }

  add(num1, num2) {
    if (
      !this.typeChecker.checkType(num1, 'number') ||
      !this.typeChecker.checkType(num2, 'number')
    )
      throw new Error('숫자만 입력하셔야 합니다.')
    return num1 + num2
  }

  substract(num1, num2) {
    if (
      !this.typeChecker.checkType(num1, 'number') ||
      !this.typeChecker.checkType(num2, 'number')
    )
      throw new Error('숫자만 입력하셔야 합니다.')
    return num1 - num2
  }

  multiply(num1, num2) {
    if (
      !this.typeChecker.checkType(num1, 'number') ||
      !this.typeChecker.checkType(num2, 'number')
    )
      throw new Error('숫자만 입력하셔야 합니다.')
    return num1 * num2
  }

  divide(num1, num2) {
    if (
      !this.typeChecker.checkType(num1, 'number') ||
      !this.typeChecker.checkType(num2, 'number')
    )
      throw new Error('숫자만 입력하셔야 합니다.')
    if (num2 === 0) throw new Error('0으로 나눌 수 없습니다.')
    return Math.floor(num1 / num2)
  }
}
