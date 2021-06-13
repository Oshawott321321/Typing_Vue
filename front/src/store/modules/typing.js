const typing = {
  state: {
    error_rate: 0,
    typing_speed: 0,
    no_of_sessions: 0
  },
  mutations: {
    INITIALIZING_STATS (state ,{ payload }) {
      console.log('in initializing stats' , payload)
      state.error_rate = payload.error_rate
      state.typing_speed = payload.typing_speed
    },
    REMOVING_STATS ( state ) {
      console.log('In removing stats')
      localStorage.removeItem('typingstats')
      state.error_rate = 0
      state.typing_speed = 0
    }
  },
  actions: {
    initializing_action ( { commit } , payload1) {
      console.log("in initailzing action")
      console.log(payload1)
      const payload = {
        error_rate: payload1.er,
        typing_speed: payload1.ty
      }
      localStorage.setItem('typingstats' , JSON.stringify(payload))
      commit('INITIALIZING_STATS' , {payload: payload})
    },
    reseting_stats ({ commit }) {
      commit('REMOVING_STATS')
    }
  }
}

export default typing
