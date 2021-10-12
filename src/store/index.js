import { createStore } from 'vuex'
import { SET_GAME, SET_NAME, SET_LIFE, SET_ENERGY, SET_ENTERTAINMENT, SET_LIFE_INTERVAL, SET_ENERGY_INTERVAL, SET_ENTERTAINMENT_INTERVAL, DECREASE } from './mutation-types'
import { LIFE, ENERGY, ENTERTAINMENT, DECREASE_LIFE, DECREASE_ENERGY, DECREASE_ENTERTAINMENT } from '@/config.js'
import { characteristics } from './modules/characteristics'

export default createStore({
  state: {
    gameFromVueX: 0,
    nameFromVueX: '',
    lifeFromVueX: 100,
    energyFromVueX: 100,
    entertainmentFromVueX: 100,
    lifeInterval: null,
    energyInterval: null,
    entertainmentInterval: null
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
    },
    setLifeInterval (state, interval) {
      state.lifeInterval = interval
    },
    setEnergyInterval (state, interval) {
      state.energyInterval = interval
    },
    setEntertainmentInterval (state, interval) {
      state.entertainmentInterval = interval
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
    [SET_LIFE_INTERVAL] ({ commit, dispatch }) {
      const interval = setInterval(() => {
        dispatch(DECREASE, { name: LIFE, decreaseValue: DECREASE_LIFE })
      }, 1000)
      commit('setLifeInterval', interval)
    },
    [SET_ENERGY_INTERVAL] ({ commit, dispatch }) {
      const interval = setInterval(() => {
        dispatch(DECREASE, { name: ENERGY, decreaseValue: DECREASE_ENERGY })
      }, 1000)
      commit('setEnergyInterval', interval)
    },
    [SET_ENTERTAINMENT_INTERVAL] ({ commit, dispatch }) {
      const interval = setInterval(() => {
        dispatch(DECREASE, { name: ENTERTAINMENT, decreaseValue: DECREASE_ENTERTAINMENT })
      }, 1000)
      commit('setEntertainmentInterval', interval)
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
