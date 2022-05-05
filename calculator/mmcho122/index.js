;(function () {
  'use strict'

  const el = function (element) {
    if (element.charAt(0) === '#') {
      return document.querySelector(element)
    }

    return document.querySelectorAll(element)
  }

  let viewer = el('#viewer'),
    equals = el('#equals'),
    nums = el('.digit'),
    ops = el('.operation'),
    theNum = '',
    oldNum = '',
    resultNum,
    operator

  let setNum = function () {
    if (resultNum) {
      theNum = this.getAttribute('data-num')
      resultNum = ''
    } else {
      theNum += this.getAttribute('data-num')
    }

    viewer.innerHTML = theNum
  }

  const moveNum = function () {
    oldNum = theNum
    theNum = ''
    operator = this.getAttribute('data-ops')

    equals.setAttribute('data-result', '')
  }

  const displayNum = function () {
    oldNum = parseFloat(oldNum)
    theNum = parseFloat(theNum)

    if (theNum) {
      switch (operator) {
        case 'plus':
          resultNum = oldNum + theNum
          break

        case 'minus':
          resultNum = oldNum - theNum
          break

        case 'times':
          resultNum = oldNum * theNum
          break

        case 'divided by':
          resultNum = oldNum / theNum
          break

        default:
          resultNum = theNum
      }
    } else {
      alert('숫자를 먼저 입력하세요')
    }

    viewer.innerHTML = resultNum
    equals.setAttribute('data-result', resultNum)

    oldNum = 0
    theNum = resultNum
    console.log(`result: ${resultNum}`)
  }

  const clearAll = function () {
    oldNum = ''
    theNum = ''
    viewer.innerHTML = '0'
    equals.setAttribute('data-result', resultNum)
  }

  const Print = () => {
    return resultNum
  }
  console.log(`result: ${Print}`)

  for (let i = 0, j = nums.length; i < j; i++) {
    nums[i].onclick = setNum
  }

  for (let i = 0, j = ops.length; i < j; i++) {
    ops[i].onclick = moveNum
  }

  equals.onclick = displayNum

  el('#clear').onclick = clearAll
})()
