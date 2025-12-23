<template>
  <BoxContainer />
  <div class="container">
    <div class="button-container">
      <h2>{{ count }}</h2>
      <CounterButtons @change-count="handleCountChange" />
    </div>
  </div>
</template>

<script lang="ts">
  import BoxContainer from './components/BoxContainer.vue'
  import CounterButtons from './components/CounterButtons.vue'

  export default {
    name: 'App',
    components: {
      BoxContainer,
      CounterButtons,
    },
    data() {
      return {
        count: 0,
      }
    },
    methods: {
      handleCountChange(
        action: 'increment' | 'decrement' | 'clear',
        value = 1
      ) {
        switch (action) {
          case 'increment':
            this.count += value
            break
          case 'decrement':
            this.count -= value
            break
          case 'clear':
            this.count = 0
            break
        }
      },
    },
  }
</script>

<style>
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
  }
</style>
