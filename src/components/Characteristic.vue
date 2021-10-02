<template>
  <div class="characteristic">
      <p>{{name}} : {{value}}</p>
      <input type="button" value="{{buttonName}}">
  </div>
</template>

<script>
export default {
  name: 'Characteristic',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    buttonName: {
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
