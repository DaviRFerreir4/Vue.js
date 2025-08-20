<template>
  <h3>Name: {{ name }}</h3>
  <p>Email: {{ email }}</p>
  <p>Phone: {{ phone }}</p>
  <p class="float-end small" v-if="ownername !== ''">
    * this contact info belongs to {{ ownername }}
  </p>
</template>
<script setup>
import { ref } from "vue"
// const email = ref("davi@email.com") // tem preferência acima da prop no chamado do componente
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "- n/a -" },
  is_favorite: Boolean,
})
</script>
