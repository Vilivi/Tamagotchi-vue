<template>
  <div class="characteristics">
    <Characteristic v-for="(data, index) in config" :key="index"
      :name="data.name"
      :buttonName="data.buttonName"
      :decreaseValue="data.decreaseValue"
    />
  </div>
</template>

<script>
import Characteristic from './Characteristic.vue'
import { config } from '@/config'

export default {
  name: 'Characteristics',
  components: {
    Characteristic
  },
  data: function () {
    return {
      config: config
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">

</style>
