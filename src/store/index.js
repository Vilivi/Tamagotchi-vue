import { createStore } from 'vuex'

export default createStore({
  state: {
    nameFromVueX: 'Default Name'
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
  },
  modules: {
  }
})
