<template>
  <div>
    <input v-model="title" type="text">
    <button @click="send">子按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTitle: ""
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    methods: {
      send() {
        this.$emit('update:title', this.title)
      }
    }
  }
</script>
<style>
</style>

