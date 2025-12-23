<template>
  <div class="container-box">
    <Box />
    <Box />
    <Box />
  </div>
</template>

<script lang="ts">
  import Box from './components/box.vue'

  export default {
    name: 'App',
    components: {
      Box,
    },
  }
</script>

<style scoped>
  .container-box {
    padding: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
