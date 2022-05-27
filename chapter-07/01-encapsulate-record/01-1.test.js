import { printResult } from './01-1'

it('printResult', () => {
  let tmp = ''
  jest.spyOn(console, 'log').mockImplementation((str) => (tmp += str))

  printResult()

  expect(tmp).toBe('<h1>에그머니 블루베리</h1>')
})
