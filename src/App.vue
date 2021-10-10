<template>
  <div class="app">
    <h1>Bienvenue sur TamaApp!</h1>
    <Form @initGame="startGame" />
    <h1>Nom:{{tamaName}}</h1>
    <div v-if="game == 1 && tamaName">
      <Characteristics />
    </div>
    <div v-if="game == 2 && tamaName">
      <h2>Game Over</h2>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Characteristics from './components/Characteristics.vue'
import { SET_GAME } from '@/store/mutation-types'

export default {
  name: 'App',
  components: {
    Form,
    Characteristics
  },
  data: function () {
    return {
    }
  },
  computed: {
    tamaName () {
      return this.strUcFirst(this.$store.state.nameFromVueX)
    },
    game () {
      return this.$store.state.gameFromVueX
    }
  },
  methods: {
    strUcFirst: function (a) {
      return (a + '').charAt(0).toUpperCase() + a.substr(1)
    },
    startGame: function () {
      this.$store.dispatch(SET_GAME, 1)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/_shared.scss';

.app {
  background: $black;
  color: $white;
}
</style>
