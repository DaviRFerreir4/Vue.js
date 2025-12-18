<template>
  <div>
    <h1>Product List</h1>
    <p>Here is the list of products</p>
    <ul>
      <li v-for="product in products">
        <router-link
          :to="{
            name: 'product-details',
            params: {
              productId: product.productId,
              categoryId: product.categoryId,
            },
          }"
          >{{ product.name }}</router-link
        >
      </li>
    </ul>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
</template>

<script setup>
const products = [
  { productId: 1, name: "Mouse", categoryId: 1 },
  { productId: 2, name: "Keyboard", categoryId: 1 },
  { productId: 3, name: "Monitor", categoryId: 1 },
  { productId: 4, name: "Spoon", categoryId: 2 },
  { productId: 5, name: "Fork", categoryId: 2 },
]
</script>
