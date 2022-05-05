export default function calculate() {
  let result = 0
  return function closure(op, oldNum, theNum) {
    switch (op) {
      case '+':
        return (result += Math.round(parseInt(oldNum) + parseInt(theNum)))
      case '-':
        return (result += Math.round(parseInt(oldNum) - parseInt(theNum)))
      case '/':
        return (result += Math.round(parseInt(oldNum) / parseInt(theNum)))
        break
      case '*':
        return (result += Math.round(parseInt(oldNum) * parseInt(theNum)))
        break
      case 'AC':
        return (result = 0)
        break
      case 'PN':
        return result
        break
      default:
        throw new Error('숫자를 먼저 입력하세요')
    }
  }
}
