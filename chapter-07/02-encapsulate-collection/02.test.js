import { Person, Course } from './02'

describe('Person', () => {
  const aPerson = new Person('파울러')
  // const aCourse = new Course('korean', false)

  it('name should be 파울러', () => {
    expect(aPerson.name).toBe('파울러')
  })
  it('courses should be empty array', () => {
    expect(aPerson.courses).toEqual([])
  })
  // it('courses should return SOMETHING_GOOD when addCourse has been called', () => {
  //   aPerson.addCourse(aCourse)

  //   expect(aPerson.courses.length).toEqual(1)
  //   expect(aPerson.courses).toEqual([{ _name: 'korean', _isAdvanced: false }])
  // })
  // it('courses should return SOMETHING_GOOD when removeCourse has been called', () => {
  //   aPerson.removeCourse(aCourse)

  //   expect(aPerson.courses.length).toEqual(0)
  //   expect(aPerson.courses).toEqual([])
  // })
  // it('throws an Error if there is not matched course removed', () => {
  //   expect(() => aPerson.removeCourse(aCourse)).toThrowError()
  // })
})

describe('Course', () => {
  const aCourse = new Course('korean', false)

  it('name should be korean', () => {
    expect(aCourse.name).toBe('korean')
  })
  it('isAdvanced should be false', () => {
    expect(aCourse.isAdvanced).toBeFalsy()
  })
})
