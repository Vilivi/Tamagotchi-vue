<template>
  <div class="form">
    <form>
      <label for="tamaName">Rentre le nom de ton Tamagotchi :</label>
      <input type="text" name="tamaName" v-model="tamaName" required>
      <input type="submit" v-on:click="passName" value="Validate">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      tamaName: ''
    }
  },
  methods: {
    passName: function () {
      console.log(this.tamaName)
      this.$store.commit('setNameFromVueX', this.tamaName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
