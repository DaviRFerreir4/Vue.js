<template>
  <button @click="$emit('increment')">+1</button>
</template>

<script lang="ts">
  export default {
    name: 'Button',
  }
</script>

<style scoped>
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;

    color: white;
    background-color: #42b983;
    cursor: pointer;

    &:hover {
      background-color: #61e819;
    }
  }
</style>
