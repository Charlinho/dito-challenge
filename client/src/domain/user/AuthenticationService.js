export default class AuthenticationService {
  constructor (resourse) {
    this._resourse = resourse('users/authentication')
  }

  authentication (user) {
    return this._resourse.save(user)
  }
}
