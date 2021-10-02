<template>
  <Form />
  <h1>{{tamaName}}</h1>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  },
  data: function () {
    return {
    }
  },
  computed: {
    tamaName () {
      return this.$store.state.nameFromVueX
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
