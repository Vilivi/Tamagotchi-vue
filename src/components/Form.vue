<template>
  <div class="form">
      <label for="tamaName">Rentre le nom de ton Tamagotchi :</label>
      <input type="text" name="tamaName" v-model="tamaName" required>
      <input type="submit" value="Start" v-on:click="initGame">
  </div>
</template>

<script>
import { SET_NAME } from '@/store/mutation-types'
export default {
  name: 'Form',
  data: function () {
    return {
      tamaName: ''
    }
  },
  methods: {
    initGame: function () {
      this.$emit('initGame')
    }
  },
  updated () {
    this.$store.dispatch(SET_NAME, this.tamaName)
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">

</style>
