import { createStore } from 'vuex'
import { SET_GAME, SET_NAME, SET_LIFE, SET_ENERGY, SET_ENTERTAINMENT, SET_LIFE_INTERVAL, SET_ENERGY_INTERVAL, SET_ENTERTAINMENT_INTERVAL, DECREASE, INCREASE, CLEAR_ALL, CLEAR_INTERVAL, GET_METEO } from './mutation-types'
import { LIFE, ENERGY, ENTERTAINMENT, DECREASE_LIFE, DECREASE_ENERGY, DECREASE_ENTERTAINMENT, INCREASE_LIFE, INCREASE_ENERGY, INCREASE_ENTERTAINMENT } from '@/config.js'

export default createStore({
  state: {
    gameFromVueX: 0,
    meteoFromVueX: null,
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
    setMeteoFromVueX (state, meteo) {
      state.meteoFromVueX = meteo
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
    [SET_GAME] ({ commit }, game) {
      if (game === 2) {
        this.dispatch(CLEAR_ALL)
      }
      commit('setGameFromVueX', game)
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
      }, 2000)
      commit('setLifeInterval', interval)
    },
    [SET_ENERGY_INTERVAL] ({ commit, dispatch }) {
      const interval = setInterval(() => {
        dispatch(DECREASE, { name: ENERGY, decreaseValue: DECREASE_ENERGY })
      }, 2000)
      commit('setEnergyInterval', interval)
    },
    [SET_ENTERTAINMENT_INTERVAL] ({ commit, dispatch }) {
      const interval = setInterval(() => {
        dispatch(DECREASE, { name: ENTERTAINMENT, decreaseValue: DECREASE_ENTERTAINMENT })
      }, 2000)
      commit('setEntertainmentInterval', interval)
    },
    [DECREASE] ({ dispatch, state }, data) {
      let newValue
      switch (data.name) {
        case LIFE:
          newValue = Math.max(0, state.lifeFromVueX - data.decreaseValue)
          dispatch(SET_LIFE, newValue)
          break
        case ENERGY:
          newValue = Math.max(0, state.energyFromVueX - data.decreaseValue)
          dispatch(SET_ENERGY, newValue)
          break
        case ENTERTAINMENT:
          newValue = Math.max(0, state.entertainmentFromVueX - data.decreaseValue)
          dispatch(SET_ENTERTAINMENT, newValue)
          break
      }
    },
    [INCREASE] ({ dispatch, state }, name) {
      let newValue
      switch (name) {
        case LIFE:
          newValue = Math.min(100, state.lifeFromVueX + INCREASE_LIFE)
          dispatch(SET_LIFE, newValue)
          break
        case ENERGY:
          newValue = Math.min(100, state.energyFromVueX + INCREASE_ENERGY)
          dispatch(SET_ENERGY, newValue)
          break
        case ENTERTAINMENT:
          newValue = Math.min(100, state.entertainmentFromVueX + INCREASE_ENTERTAINMENT)
          dispatch(SET_ENTERTAINMENT, newValue)
          break
      }
    },
    [CLEAR_ALL] ({ commit }) {
      const INTERVAL = null
      commit('setLifeInterval', INTERVAL)
      commit('setEnergyInterval', INTERVAL)
      commit('setEntertainmentInterval', INTERVAL)
    },
    [CLEAR_INTERVAL] ({ commit }, name) {
      const INTERVAL = null
      switch (name) {
        case LIFE:
          commit('setLifeInterval', INTERVAL)
          break
        case ENERGY:
          commit('setEnergyInterval', INTERVAL)
          break
        case ENTERTAINMENT:
          commit('setEntertainmentInterval', INTERVAL)
          break
      }
    },
    async [GET_METEO] ({ commit }) {
      const json = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=pull or`)
      const meteo = await json.json()
      commit('setMeteoFromVueX', meteo.main)
    }
  }
})
