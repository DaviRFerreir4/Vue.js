<template>
  <div class="box">
    {{ `${name}, ${age}` }}
    <span :class="status">{{ status }}</span>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Box',
    props: {
      name: { type: String, default: 'N/A' },
      age: { type: Number, required: true },
      status: {
        type: String,
        default: 'active',
        validator: (value: string) => {
          return value && ['active', 'inactive'].includes(value)
        },
      },
    },
  }
</script>

<style scoped>
  .box {
    padding: 10px 15px;
    display: grid;
    justify-items: center;
    gap: 5px;
  }

  .active {
    background-color: green;
  }

  .inactive {
    background-color: red;
  }
</style>
