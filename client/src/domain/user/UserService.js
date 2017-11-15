export default class UserService {
  constructor (resourse) {
    this._resourse = resourse('users')
  }

  save (user) {
    return this._resourse.save(user)
  }
}
