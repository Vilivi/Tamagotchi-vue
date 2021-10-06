import { createStore } from 'vuex'
import { SET_NAME, SET_LIFE, SET_ENERGY, SET_ENTERTAINMENT } from './mutation-types'
import { characteristics } from './modules/characteristics'

export default createStore({
  state: {
    nameFromVueX: '',
    lifeFromVueX: 100,
    energyFromVueX: 100,
    entertainmentFromVueX: 100
  },
  getters: {
    lifeToPercentage (state) {
      return state.lifeFromVueX + '%'
    },
    energyToPercentage (state) {
      return state.energyFromVueX + '%'
    },
    entertainmentToPercentage (state) {
      return state.entertainmentFromVueX + '%'
    }
  },
  mutations: {
    setNameFromVueX (state, newName) {
      state.nameFromVueX = newName
    },
    setLifeFromVueX (state, newLife) {
      state.lifeFromVueX = newLife
    },
    setEnergyFromVueX (state, newEnergy) {
      state.energyFromVueX = newEnergy
    },
    setEntertainmentFromVueX (state, newEntertainment) {
      state.entertainmentFromVueX = newEntertainment
    }
  },
  actions: {
    [SET_NAME] ({ commit, state }, newName) {
      if (state.nameFromVueX !== newName) {
        commit('setNameFromVueX', newName)
      }
    },
    [SET_LIFE] ({ commit, state }, newLife) {
      if (state.lifeFromVueX !== newLife) {
        commit('setLifeFromVueX', newLife)
      }
    },
    [SET_ENERGY] ({ commit, state }, newEnergy) {
      if (state.energyFromVueX !== newEnergy) {
        commit('setEnergyFromVueX', newEnergy)
      }
    },
    [SET_ENTERTAINMENT] ({ commit, state }, newEntertainment) {
      if (state.entertainmentFromVueX !== newEntertainment) {
        commit('setEntertainmentFromVueX', newEntertainment)
      }
    }
  },
  modules: {
    characteristics
  }
})
