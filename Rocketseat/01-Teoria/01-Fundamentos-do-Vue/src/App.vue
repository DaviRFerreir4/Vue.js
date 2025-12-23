<template>
  <!-- <BoxContainer />
  <CounterContainer /> -->
  <TaskList />
</template>

<script lang="ts">
  import BoxContainer from './components/BoxContainer.vue'
  import CounterContainer from './components/CounterContainer.vue'
  import TaskList from './components/TaskList.vue'

  export default {
    name: 'App',
    components: {
      BoxContainer,
      CounterContainer,
      TaskList,
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
</style>
