function printResult() {
  let result = ''
  const organiztion = { name: '에크미 구스베리', country: 'GB' }

  organiztion.name = '에그머니 블루베리'
  result += `<h1>${organiztion.name}</h1>`

  console.log(result)
}

export { printResult }
