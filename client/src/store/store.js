import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-ls'

Vue.use(Vuex)
Vue.use(VueLocalStorage)

const state = {
  user: ''
}

const getters = {
  getAuthenticatedUserName: () => {
    let userName = ''
    if (!state.user && state.user.user && Vue.ls.get('logged')) {
      userName = Vue.ls.get('logged').name
    } else if (state.user && state.user.user) {
      userName = state.user.user.name
    }

    return userName
  }
}

const mutations = {
  login (state, user) {
    state.user = user
  }
}

const actions = {
  login: ({ commit }, user) => commit('login', user)
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
