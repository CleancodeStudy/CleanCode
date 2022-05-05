export default class TypeChecker {
  checkType(value, type) {
    return typeof value === type
  }
}
