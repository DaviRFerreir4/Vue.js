<template>
  <div class="container">
    <div class="button-container">
      <h2
        :style="{
          color: changeColorCount,
        }"
      >
        {{ count }}
      </h2>
      <CounterButtons @change-count="handleCountChange" :count-value="count" />
      <p
        :style="{
          color: changeColorCount,
        }"
      >
        {{ countState }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import CounterButtons from './CounterButtons.vue'

  export default {
    name: 'CounterContainer',
    components: {
      CounterButtons,
    },
    data() {
      return {
        count: Number(localStorage.getItem('count')) ?? 0,
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
    computed: {
      changeColorCount() {
        if (this.count > 0) {
          return 'green'
        }
        if (this.count < 0) {
          return 'red'
        }
        return 'black'
      },
      countState() {
        if (this.count >= 0) {
          return 'Positivo'
        }
        return 'Negativo'
      },
    },
    watch: {
      count(newValue) {
        localStorage.setItem('count', newValue)
      },
      changeColorCount(newValue) {
        alert(`Nova cor selecionada: ${newValue}`)
      },
    },
  }
</script>

<style scoped>
  .button-container {
    display: grid;
    justify-items: center;
  }
</style>
