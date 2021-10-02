<template>
  <div class="characteristics">
    <Characteristic />
  </div>
</template>

<script>
import Characteristic from './Characteristic.vue'

export default {
  name: 'Characteristics',
  components: {
    Characteristic
  },
  data: function () {
    return {}
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">

</style>
