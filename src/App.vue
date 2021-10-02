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
      return this.strUcFirst(this.$store.state.nameFromVueX)
    }
  },
  methods: {
    strUcFirst: function (a) {
      return (a + '').charAt(0).toUpperCase() + a.substr(1)
    }
  }
}
</script>

<style lang="scss">

</style>
