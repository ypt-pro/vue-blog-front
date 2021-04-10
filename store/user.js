// import { getToken, setToken, removeToken } from '../utils/auth'
import createPersistedState from 'vuex-persistedstate'
export const state = () => ({
  music: [

  ],
  currentTime:'',
  duration:'',
  currentSrc:''
})

export const mutations = {
  add (state, list) {
    state.music = list
  },
  addTime(state, x){

    state.currentTime = x
  },
  addDru(state, x){
    state.duration = x
  },
  addSrc(state, x){
    state.currentSrc = x
  },
  remove (state) {
    state.music = []
  }

}

export const actions = {
  // getData (store) {
  //   setTimeout(() => {
  //     store.commit('add')
  //   }, 3000)
  // }
}

