export default class EventService {
  constructor (resourse) {
    this._resourse = resourse('events{/userId}')
  }

  create (event) {
    return this._resourse.save(event)
  }

  listAll (userId) {
    return this._resourse.get({ userId }).then(res => res.json(), err => {
      console.log(err)
      throw new Error('Não foi possível obter os Eventos')
    })
  }
}
