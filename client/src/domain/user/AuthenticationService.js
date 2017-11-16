export default class AuthenticationService {
  constructor (resourse, address) {
    this._resourse = resourse(address)
  }

  authentication (user) {
    return this._resourse.save(user)
  }

  logout () {
    return this._resourse.save()
  }
}
