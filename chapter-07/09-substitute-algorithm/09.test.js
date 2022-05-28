import { findPerson } from './09'

it('findPerson', () => {
  const persons = ['Roy', 'Jay', 'Don', 'Kay', 'John', 'Peter', 'Kent', 'Clark']

  expect(findPerson(persons)).toBe('Don')
})
