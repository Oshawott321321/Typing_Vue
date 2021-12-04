import axios from 'axios'
import router from '@/router'

const auth = {
  state: {
    token: localStorage.getItem('jwttoken'),
    isAuthenticated: false,
    user: null,
    isLoading: null,
    login_error: ''
  },
  getters: {
    getToken (state) {
      return state.auth.token
    }
  },
  mutations: {
    USER_NOT_AUTHENTICATED (state) {
      state.isAuthenticated = false
      state.isLoading = false
      state.user = null
      state.token = null
    },
    USER_LOG_OUT (state) {
      localStorage.removeItem('jwttoken')
      state.isAuthenticated = false
      state.isLoading = false
      state.user = null
      state.token = null
    },
    SUCEESSFUL_LOGIN (state, { payload }) {
      localStorage.setItem('jwttoken', payload.token)
      state.isAuthenticated = true
      state.isLoading = false
      state.user = payload.data
      state.token = payload.token
      state.login_error = ''
    },
    INITIALIZING_USER (state, { payload, token }) {
      console.log('in yser ' , token , payload)
      state.isAuthenticated = true
      state.isLoading = false
      state.user = payload.data
      state.token = token
      state.login_error = ''
    }

  },
  actions: {
    async initialize_user ({ commit, getters, state }) {
      console.log('in actions', state.token)
      const token = state.token
      if (token === null) {
        console.log('token', token)
        commit('USER_NOT_AUTHENTICATED')
        console.log('commiting')
        const tystats = localStorage.getItem('typingstats')
        if (tystats === null) {
          console.log(tystats)
          const payload = {
            typing_speed: 0,
            error_rate: 0
          }
          commit('typing/INITIALIZING_STATS' , {payload: payload } , { root: true })
        }
        else {
          const payload = JSON.parse(tystats)
          commit('typing/INITIALIZING_STATS' , {payload: payload } , { root: true })
        }
      }
      else {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        await axios.get('http://localhost:8081/user/userinfo', config)
          .then(res => {
            console.log('res', res)
            commit('INITIALIZING_USER' , { payload: res.data, token: token })
          })
          .catch(err => {
            console.log('err', err)
            const tystats = localStorage.getItem('typingstats')
            if (tystats === null) {
              console.log(tystats)
              const payload = {
                typing_speed: 0,
                error_rate: 0
              }
              commit('typing/INITIALIZING_STATS', {payload: payload }, { root: true })
            }
            else {
              const payload = JSON.parse(tystats)
              commit('typing/INITIALIZING_STATS', {payload: payload }, { root: true })
            }
          })
      }
    },

    login_action ({ commit, state }, userdata) {
      console.log(' in login action')
      console.log('payload', userdata)
      const body = {
        email: userdata.email,
        password: userdata.password
      }
      const config = {
        headers: {
          'content-type': 'application/json'
          // "Access-Control-Allow-Origin": "*"
        }
      }
      axios.post('http://localhost:8081/user/login', body, config)
        .then(res => {
          console.log('res', res.data)
          commit('SUCEESSFUL_LOGIN', { payload: res.data})
          router.push({name: 'Dashboard'})
          const payload = {
            error_rate: res.data.data.error_rate,
            typing_speed: res.data.data.typing_speed
          }
          localStorage.setItem('typingstats', JSON.stringify(payload))
          commit('typing/INITIALIZING_STATS' , {payload: payload } , { root: true })
        })
        .catch(err => {
          console.log('err', err.response)
          state.login_error = err.response.data.msg
        })
    },

    register_action ({ commit ,state } , userdata) {
      console.log('in reg action' , userdata)
      const body = {
        email: userdata.email,
        password: userdata.password
      }
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }
      axios.post('http://localhost:8081/user/register', body, config)
        .then(res => {
          console.log('res', res)
          commit('SUCEESSFUL_LOGIN' , { payload: res.data})
          router.push({name: 'Dashboard'})
          console.log('reskjfdsla', res.data.data)
          const payload = {
            error_rate: res.data.data.error_rate,
            typing_speed: res.data.data.typing_speed
          }
          localStorage.setItem('typingstats', JSON.stringify(payload))
          commit('typing/INITIALIZING_STATS' , {payload: payload } , { root: true })
        })
        .catch(err => {
          console.log('erer' , err.response)
        })
    },

    log_out_action ({ commit }) {
      commit('USER_LOG_OUT')
      commit('typing/REMOVING_STATS', {}, { root: true })
      router.push({name: 'Login'})
    }
  }
}

export default auth
