import { Person, Department } from './07'

describe('Person', () => {
  let sr

  beforeEach(() => {
    sr = new Person('상로')
  })

  it('get name', () => {
    expect(sr.name).toBe('상로')
  })

  it('get department', () => {
    sr.department = '개발'

    expect(sr.department).toBe('개발')
  })

  it('set department', () => {
    sr.department = '영업'

    expect(sr.department).toBe('영업')
  })
})

describe('Department', () => {
  let developer

  beforeEach(() => {
    developer = new Department('FEDEV', '로사')
  })

  it('get chargeCode', () => {
    expect(developer.chargeCode).toBe('FEDEV')
  })

  it('set chargeCode', () => {
    developer.chargeCode = 'BEDEV'

    expect(developer.chargeCode).toBe('BEDEV')
  })

  it('get manager', () => {
    expect(developer.manager).toBe('로사')
  })

  it('set manager', () => {
    developer.manager = '상로'

    expect(developer.manager).toBe('상로')
  })
})
