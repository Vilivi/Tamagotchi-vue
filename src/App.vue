<template>
  <div class="app">
    <h1>Bienvenue sur TamaApp!</h1>
    <Form @initGame="startGame" />
    <h1>Nom:{{tamaName}}</h1>
    <div v-if="init == true && tamaName">
      <Characteristics />
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Characteristics from './components/Characteristics.vue'

export default {
  name: 'App',
  components: {
    Form,
    Characteristics
  },
  data: function () {
    return {
      init: false

    }
  },
  computed: {
    tamaName () {
      return this.strUcFirst(this.$store.state.nameFromVueX)
    }
  },
  methods: {
    startGame: function () {
      this.init = true
    },
    strUcFirst: function (a) {
      return (a + '').charAt(0).toUpperCase() + a.substr(1)
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
