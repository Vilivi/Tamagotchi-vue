import { createStore } from 'vuex'
import { SET_GAME, SET_NAME, SET_LIFE, SET_ENERGY, SET_ENTERTAINMENT, DECREASE } from './mutation-types'
import { LIFE, ENERGY, ENTERTAINMENT } from '@/config.js'
import { characteristics } from './modules/characteristics'

export default createStore({
  state: {
    gameFromVueX: 0,
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
    setGameFromVueX (state, game) {
      state.gameFromVueX = game
    },
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
    [SET_GAME] ({ commit, state }, game) {
      if (state.gameFromVueX !== game) {
        commit('setGameFromVueX', game)
      }
    },
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
    },
    [DECREASE] ({ dispatch, state }, data) {
      let newValue
      switch (data.name) {
        case LIFE:
          newValue = state.lifeFromVueX - data.decreaseValue
          dispatch(SET_LIFE, newValue)
          break
        case ENERGY:
          newValue = state.energyFromVueX - data.decreaseValue
          dispatch(SET_ENERGY, newValue)
          break
        case ENTERTAINMENT:
          newValue = state.entertainmentFromVueX - data.decreaseValue
          dispatch(SET_ENTERTAINMENT, newValue)
          break
      }
    }
  },
  modules: {
    characteristics
  }
})
