<template>
  <div class="container">
    <Box name="Davi" :age="22" />
    <Box name="Thiago" :age="18" />
    <Box name="Murilo" :age="34" status="inactive" />
  </div>
</template>

<script lang="ts">
  import Box from './Box.vue'

  export default {
    name: 'BoxContainer',
    components: {
      Box,
    },
  }
</script>
