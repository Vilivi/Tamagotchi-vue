<template>
  <div class="characteristic">
      <p>{{name}} : {{ value }}</p>
      <button type="submit">{{ buttonName }}</button>
  </div>
</template>

<script>
import { LIFE, ENERGY, ENTERTAINMENT } from '@/config.js'
import { DECREASE } from '@/store/mutation-types'

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
    },
    decreaseValue: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      intervalVar: null
    }
  },
  mounted () {
    this.$store.dispatch(DECREASE, { name: this.name, decreaseValue: this.decreaseValue })
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
    manageInterval: function (isActivate) {
      if (isActivate) {
        this.interval = setInterval(this.$store.dispatch(DECREASE, { name: this.name, decreaseValue: this.decreaseValue }), 1000)
        this.setValue()
      } else {
        clearInterval(this.interval)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">

</style>
