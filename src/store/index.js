import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  token: localStorage.getItem('token'),
  agentId: localStorage.getItem('agentId')
}

const mutations = {
  token (state, param) {
    state.token = param
  },
  agentId (state, param) {
    state.agentId = param
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
