<template>
  <header class="container p-4">
    <div class="text-center p-3 text-success h3">CountOPedia</div>
    <hr />
    <div class="d-flex justify-content-evenly">
      <div class="col-3">
        <router-link
          :to="{ name: 'home' }"
          class="form-control badge rounded-pill text-bg-warning p-4"
          >Home</router-link
        >
      </div>
      <div class="col-3">
        <router-link
          :to="{ name: 'info' }"
          class="form-control badge rounded-pill text-bg-warning p-4"
          >Info</router-link
        >
      </div>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<script setup></script>
