import { Person, Department } from './08'

describe('Department', () => {
  const department = new Department('로사')

  it('로사로 초기화 하면 매니저는 로사가 된다.', () => {
    expect(department.manager).toBe('로사')
  })
})

describe('Person', () => {
  const department = new Department('로사')
  const person = new Person('상로', department)

  it('', () => {
    expect(person.name).toBe('상로')
  })

  it('', () => {
    expect(person.manager).toBe('로사')
  })
})
