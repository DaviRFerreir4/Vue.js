<template>
  <div>
    <h1>Home Page</h1>
    <button @click="goToContact">Contact Us</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
function goToContact() {
  router.push({ name: "contact" })
  console.log("Alo") // ainda executa o código mesmo indo para outra rota
  // router.push("/contact")
}
</script>
