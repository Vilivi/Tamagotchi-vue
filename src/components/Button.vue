<template>
  <div class="button">
      <input type="button" value="`${buttonName}`">
  </div>
</template>

<script>
export default {
  name: 'Characteristic',
  props: {
    value: {
      type: String,
      required: true
    }
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
