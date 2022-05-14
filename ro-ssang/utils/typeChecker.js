export default class TypeChecker {
  checkType(value, type) {
    return typeof value === type
  }

  checkAllTypes(values, type) {
    for (let i = 0; i < values.length; i++) {
      if (!this.checkType(values[i], type)) return false
    }
    return true
  }
}
