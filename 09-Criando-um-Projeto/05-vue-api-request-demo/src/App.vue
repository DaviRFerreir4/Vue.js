<template>
  <h1>RequestOPedia</h1>

  <div
    class="container p-4 transition"
    :class="destinationObj.isLoading ? 'bg-black' : 'bg-light'"
    style="transition: background-color 0.4s ease-in-out"
  >
    <div><h2 class="text-success text-center">TravelOPedia</h2></div>
    <hr />
    <div v-if="destinationObj.isLoading" class="d-flex justify-content-center">
      <Loader></Loader>
    </div>
    <table class="table table-striped table-light" v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Days</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="destination in destinationObj.destinations"
          :key="destination.id"
          class="table-light"
        >
          <th>{{ destination.name }}</th>
          <th>{{ destination.days }}</th>
          <th>{{ destination.price }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios"
import { onMounted, reactive } from "vue"
import Loader from "./Components/Loader.vue"

const destinationObj = reactive({ destinations: [], isLoading: false })

onMounted(async () => {
  // Requisição usando fetch
  // const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // const data = await response.json()
  // userObj.users = data
  // Requisição utilizando o axios
  // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //   userObj.users = response.data
  // })
  loadDestination()
})

function loadDestination() {
  destinationObj.isLoading = true
  axios.get("http://localhost:3000/destination").then((response) => {
    new Promise((resolve) => setTimeout(resolve, 1500)).then(() => {
      destinationObj.destinations = response.data
      destinationObj.isLoading = false
    })
  })
}
</script>
