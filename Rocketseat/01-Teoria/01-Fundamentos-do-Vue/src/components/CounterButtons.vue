<template>
  <div>
    <div class="flex">
      <Button title="+1" @update="$emit('change-count', 'increment')" />
      <Button title="-1" @update="$emit('change-count', 'decrement')" />
    </div>
    <Button title="Zerar" @update="$emit('change-count', 'clear')" />
  </div>
</template>

<script lang="ts">
  import Button from './Button.vue'

  export default {
    name: 'CountContainer',
    components: {
      Button,
    },
    emits: ['change-count'],
  }
</script>

<style scoped>
  div {
    display: grid;
    gap: 10px;
  }

  .flex {
    display: flex;
  }
</style>
