<template>
  <div class="container">
    <Box name="Davi" :age="22" />
    <Box name="Thiago" :age="18" />
    <Box name="Murilo" :age="34" status="inactive" />
  </div>
  <div class="container">
    <div class="button-container">
      <h2>{{ count }}</h2>
      <div>
        <div>
          <Button title="+1" @update="incrementCount" />
          <Button title="-1" @update="decrementCount" />
        </div>
        <Button title="Zerar" @update="clear" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Box from './components/Box.vue'
  import Button from './components/Button.vue'

  export default {
    name: 'App',
    components: {
      Box,
      Button,
    },
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      incrementCount() {
        this.count++
      },
      decrementCount() {
        this.count--
      },
      clear() {
        this.count = 0
      },
    },
  }
</script>

<style scoped>
  .container {
    padding: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    gap: 10px;

    & + & {
      margin-top: 20px;
    }
  }

  .button-container {
    display: grid;
    justify-items: center;

    & > div {
      display: grid;
      gap: 10px;

      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
</style>
