import ErrorMessage from '../constants/ErrorMessage'
import Type from '../constants/Type'

export default class Calculator {
  constructor(typeChecker) {
    this.typeChecker = typeChecker
  }

  add(num1, num2) {
    if (!this.typeChecker.checkAllTypes([num1, num2], Type.NUMBER))
      throw new Error(ErrorMessage.MANDATORY_NUMBER)
    return num1 + num2
  }

  substract(num1, num2) {
    if (!this.typeChecker.checkAllTypes([num1, num2], Type.NUMBER))
      throw new Error(ErrorMessage.MANDATORY_NUMBER)
    return num1 - num2
  }

  multiply(num1, num2) {
    if (!this.typeChecker.checkAllTypes([num1, num2], Type.NUMBER))
      throw new Error(ErrorMessage.MANDATORY_NUMBER)
    return num1 * num2
  }

  divide(num1, num2) {
    if (!this.typeChecker.checkAllTypes([num1, num2], Type.NUMBER))
      throw new Error(ErrorMessage.MANDATORY_NUMBER)
    if (num2 === 0) throw new Error(ErrorMessage.CAN_NOT_DIVIDE_BY_ZERO)
    return Math.floor(num1 / num2)
  }
}
