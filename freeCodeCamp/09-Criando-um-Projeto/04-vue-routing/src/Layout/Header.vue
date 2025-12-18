<script setup lang="ts">
import router from "@/Router/routes"
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle px-3">
    <router-link class="navbar-brand" :to="{ name: 'home' }">App</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'contact' }"
            >Contact Us</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Products
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'product-list' }"
              >Product List</router-link
            >
            <router-link
              class="dropdown-item"
              :to="{ name: 'product-details-none' }"
              >Product Details</router-link
            >
          </div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
