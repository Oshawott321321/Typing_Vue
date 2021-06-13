import { createStore } from 'vuex'
import typing from './modules/typing.js'
import auth from './modules/auth.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    typing: {
      namespaced: true,
      ...typing
    },
    auth: {
      namespaced:true,
      ...auth
    }
  }
})
