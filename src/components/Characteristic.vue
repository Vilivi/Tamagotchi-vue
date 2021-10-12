<template>
  <div class="characteristic">
      <p>{{ name }} : {{ value }}</p>
      <button type="submit">{{ buttonName }}</button>
  </div>
</template>

<script>
import { LIFE, ENERGY, ENTERTAINMENT } from '@/config.js'
import { SET_LIFE_INTERVAL, SET_ENERGY_INTERVAL, SET_ENTERTAINMENT_INTERVAL } from '@/store/mutation-types'

export default {
  name: 'Characteristic',
  props: {
    name: {
      type: String,
      required: true
    },
    buttonName: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  mounted () {
    switch (this.name) {
      case LIFE:
        this.$store.dispatch(SET_LIFE_INTERVAL)
        break
      case ENERGY:
        this.$store.dispatch(SET_ENERGY_INTERVAL)
        break
      case ENTERTAINMENT:
        this.$store.dispatch(SET_ENTERTAINMENT_INTERVAL)
        break
    }
  },
  computed: {
    value () {
      let value
      switch (this.name) {
        case LIFE:
          value = this.$store.getters.lifeToPercentage
          break
        case ENERGY:
          value = this.$store.getters.energyToPercentage
          break
        case ENTERTAINMENT:
          value = this.$store.getters.entertainmentToPercentage
          break
      }
      return value
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">

</style>
