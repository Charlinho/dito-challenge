export default class DataService {
  constructor (resourse) {
    this._resourse = resourse('data')
  }

  create (data) {
    return this._resourse.save(data)
  }

  listAll () {
    return this._resourse.query().then(res => res.json(), err => {
      console.log(err)
      throw new Error('Não foi possível obter os dados')
    })
  }
}
