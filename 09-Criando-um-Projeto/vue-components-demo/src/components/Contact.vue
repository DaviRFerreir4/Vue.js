<template>
  <div>
    <h1>Contact us</h1>
    <p>Please send an e-mail to {{ email }}</p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const email = ref("davi@email.com")
</script>