export default function calculate() {
  let result = 0
  return function closure(op, first, second) {
    switch (op) {
      case '+':
        return (result += Math.round(parseInt(first) + parseInt(second)))
      case '-':
        return (result += Math.round(parseInt(first) - parseInt(second)))
      case '/':
        return (result += Math.round(parseInt(first) / parseInt(second)))
        break
      case '*':
        return (result += Math.round(parseInt(first) * parseInt(second)))
        break
      case 'AC':
        return (result = 0)
        break
      case 'PN':
        return result
        break
      default:
        throw new Error('올바른 형식이 아닙니다')
    }
  }
}
