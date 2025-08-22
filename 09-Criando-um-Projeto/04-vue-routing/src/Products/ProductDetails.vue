<template>
  <div v-if="Object.keys(route.params).length !== 0">
    <h1>Product Details</h1>
    <ul>
      <div v-for="(value, key) in route.params">
        <li v-if="key === 'productId' && value !== ''">
          Product Id: {{ value }}
        </li>
        <li v-if="key === 'categoryId' && value !== ''">
          Category Id: {{ value }}
        </li>
      </div>
    </ul>
  </div>
  <div v-else>
    <h1>There isn't any products information</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
const route = useRoute()
</script>
