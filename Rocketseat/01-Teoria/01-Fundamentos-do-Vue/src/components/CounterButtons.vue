<template>
  <div>
    Valor atual de count: {{ countValue }}
    <div class="flex">
      <Button title="+1" @update="$emit('change-count', 'increment')" />
      <Button
        title="-1"
        @update="$emit('change-count', 'decrement')"
        :disabled="cantDecrement"
      />
    </div>
    <Button
      title="Zerar"
      @update="$emit('change-count', 'clear')"
      :disabled="cantReset"
    />
  </div>
</template>

<script lang="ts">
  import Button from './Button.vue'

  export default {
    name: 'CountContainer',
    components: {
      Button,
    },
    props: {
      countValue: { type: Number, required: true },
    },
    computed: {
      cantDecrement() {
        return this.countValue <= -10
      },
      cantReset() {
        return this.countValue === 0
      },
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
    justify-content: space-evenly;
  }
</style>
