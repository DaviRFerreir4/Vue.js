<template>
  <div class="container-box">
    <Box name="Davi" :age="22" />
    <Box name="Thiago" :age="18" />
    <Box name="Murilo" :age="34" />
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
