import { Person } from './05'

it('telephone number', () => {
  const aPerson = new Person()
  aPerson.name = '로사'
  aPerson.officeAreaCode = '02'
  aPerson.officeNumber = '1234-5678'

  expect(aPerson.telephoneNumber).toBe('(02) 1234-5678')
})
