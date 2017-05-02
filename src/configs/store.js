import Vuex from 'vuex'
import Vue from 'vue'
import { bulletins_data, bulletin_data, photos_data } from './fakeData'

Vue.use(Vuex)

let state = {
  bulletins: [], 
  bulletin: {}, 
  galleries: [], 
}

let getters = {
}

let mutations = {
  LOAD_BULLETINS: (state, result) => {
    let bulletins = []
    for (let i = 0; i < 2; i++) {
      bulletins.push(result[i])
    }
    state.bulletins = state.bulletins.concat(bulletins)
  }, 
  LOAD_BULLETIN: (state, result) => {
    state.bulletin = result
  }, 
  LOAD_GALLERIES: (state, result) => {
    state.galleries = result
  }
}

let actions = {
  loadBulletins: ({ commit }, obj) => {
    setTimeout(() => {
      commit('LOAD_BULLETINS', bulletins_data[obj.index])
      obj.done()
    }, 2000)
  },  
  loadBulletin: ({ commit }, date) => {
    console.log('loading bulletin ' + date)
    setTimeout(() => {
      commit('LOAD_BULLETIN', bulletin_data)
    }, 2000)
  }, 
  loadGalleries: ({ commit }) => {
    setTimeout(() => {
      commit('LOAD_GALLERIES', photos_data)
    }, 1000)
  }, 
}

export default new Vuex.Store({
  state, 
  getters, 
  mutations, 
  actions, 
})