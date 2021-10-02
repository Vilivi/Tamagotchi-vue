import { createStore } from 'vuex'
import { SET_NAME } from './mutation-types'

export default createStore({
  state: {
    nameFromVueX: ''
  },
  getters: {
    // exemple:
    // doubleDuTotal(state){
    //   return state.totalFromVueX * 2;
    // }
    // et dans la vue, il faudra faire: this.$store.getters.doubleDuTotal;
  },
  mutations: {
    setNameFromVueX (state, newName) {
      state.nameFromVueX = newName
    }
  },
  actions: {
    [SET_NAME] ({ commit, state }, newName) {
      if (state.nameFromVueX !== newName) {
        commit('setNameFromVueX', newName)
      }
    }
  },
  modules: {
  }
})
