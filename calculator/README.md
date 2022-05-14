# 자바스크립트 계산기 객체 만들기

## 미션 수행규칙

1.  자신의 깃허브 아이디로 브랜치를 생성한다.
2.  자신의 깃허브 아이디로 폴더를 생성한다.
3.  해당 폴더에서 미션을 수행한다.

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] 모든 계산은 결과값을 리턴한다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.
- [ ] 계산 결과는 누적된다.
- [ ] AC(All Clear) 로 누적값을 0 으로 초기화 가능하다.
- [ ] PN(Print Number) 로 현재 누적값을 콘솔에 출력한다. ex) `result: 5`
- [ ] 숫자가 아닌 값인 경우 에러가 발생한다.

<br/>

## 📊 테스트 요구사항

기능을 구현하고 해당 기능에 대한 테스트 케이스를 만든다.

<br/>

## 🐞참고 사항

- 함수(메소드)의 호출 결과를 테스트 할 수 있어야 한다.
- 필요한 경우 각 테스트가 동작하기 전, 사전 작업을 처리 할 수 있어여 한다.
- console.log 의 결과를 테스트 할 수 있어야 한다.
- 예외를 테스트 할 수 있어여 한다.

<br/>

# 계산기 코드

- 모든 계산은 결과값을 리턴한다.
- 계산 결과를 표현할 때 소수점 이하는 버림한다.
- AC(All Clear) 로 누적값을 0 으로 초기화 가능하다.
- 숫자가 아닌 값인 경우 에러가 발생한다.

```jsx
export default function calculate(op, first, second) {
  let result = 0
  switch (op) {
    case '+':
      return (result = Math.round(parseInt(first) + parseInt(second)))
    case '-':
      return (result = Math.round(parseInt(first) - parseInt(second)))
    case '/':
      return (result = Math.round(parseInt(first) / parseInt(second)))
      break
    case '*':
      return (result = Math.round(parseInt(first) * parseInt(second)))
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
```

# 테스트 코드

```jsx
import calculator from './calculator'

/*
모든 계산은 결과값을 리턴한다
계산 결과를 표현할 때 소수점 이하는 버린다.
 */

// 2개의 숫자에 대해 덧셈이 가능하다
test('덧셈 테스트', () => {
  const result = calculator('+', '1', '2')
  expect(result).toBe(3)
})

// 2개의 숫자에 대해 뺄셈이 가능하다
test('뺄셈 테스트', () => {
  const result = calculator('-', '3', '2')
  expect(result).toBe(1)
})

// 2개의 숫자에 대해 나눗셈이 가능하다
test('나눗셈 테스트', () => {
  const result = calculator('/', '10', '2')
  expect(result).toBe(5)
})

// 2개의 숫자에 대해 곱셈이 가능하다
test('곱셈 테스트', () => {
  const result = calculator('*', '2', '5')
  expect(result).toBe(10)
})
// 누적값을 0으로 초기화 가능하다
test('초기화 테스트 ', () => {
  const result = calculator('AC')
  expect(result).toBe(0)
})
```

# 계산 결과는 누적이 가능하다?

## 어떻게 누적이 가능할까?

누적을 하기 위해서 클로저를 사용하면 어떨까라는 발상이 떠오름 왜냐하면 클로저를 사용하면 현재 상태를 기억하고 변경된 최신 상태를 유지할 수 있기 때문임.

### 예제 코드

```jsx
// 변경된 최신 상태를 유지하고있다.
function calculate() {
  let result = 0

  return function closure() {
    return result++
  }
}

let test = calculate()
console.log(test()) // 0
console.log(test()) // 1
console.log(test()) // 2
console.log(test()) // 3
```

### 테스트 코드

```jsx
import calculate from './calculator'

test('중첩 테스트', () => {
  let result = calculate()
  expect(result()).toBe(0)
  expect(result()).toBe(1)
  expect(result()).toBe(2)
  expect(result()).toBe(3)
  expect(result()).toBe(4)
  expect(result()).toBe(5)
})
```

```jsx
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.459 s, estimated 1 s
```

# 클로저를 사용하여 계산값 누적하기

```jsx
function calculate() {
  let result = 0

  return function closure(op, one, two) {
    switch (op) {
      case '+':
        result += parseInt(one) + parseInt(two)
        break
      default:
        break
    }
    return result
  }
}

let test = calculate()
console.log(test('+', '1', '2')) // 3
console.log(test('+', '1', '2')) // 6
```

## 숫자 누적 가능

```jsx
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
```

## 테스트 코드 작성

```jsx
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
```
