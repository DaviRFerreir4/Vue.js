<template>
  <div class="box">{{ `${name}, ${age}` }}</div>
</template>

<script lang="ts">
  export default {
    name: 'Box',
    props: {
      name: { type: String, default: 'N/A' },
      age: { type: Number, required: true },
    },
  }
</script>

<style scoped>
  .box {
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;
  }
</style>
