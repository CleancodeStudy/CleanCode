
export default class Calculator {
  result

  constructor() {
    this.result = 0
  }

  calculateNumbers = {
    '+': (numbers) => numbers.reduce((num1, num2) => num1 + num2),
    '-': (numbers) => numbers.reduce((num1, num2) => num1 - num2),
    '*': (numbers) => numbers.reduce((num1, num2) => num1 * num2),
    '/': (numbers) => numbers.reduce((num1, num2) => num1 / num2),
  }

  isNumbers(numbers) {
    return numbers.every((value) => typeof value === 'number')
  }

  allClear() {
    this.result = 0
  }

  printNumber() {
    console.log(`result: ${this.result}`)
  }

  calculate(operator, ...numbers) {
    if (!this.isNumbers(numbers)) {
      throw new Error("one of them is not a number!")
    }

    const targetNumbers = numbers.length > 1 ? numbers : [this.result, ...numbers]
    return this.result = Math.floor(this.calculateNumbers[operator](targetNumbers))
  }
}
