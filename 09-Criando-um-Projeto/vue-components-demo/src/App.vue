<template>
  <div>
    {{ message }}
  </div>
  <contact></contact>
  <buttonCounter></buttonCounter>
  <buttonCounter></buttonCounter>
</template>

<script setup>
  import Contact from './components/Contact.vue';
  const message = "Hello Vue"
</script>

<style></style>