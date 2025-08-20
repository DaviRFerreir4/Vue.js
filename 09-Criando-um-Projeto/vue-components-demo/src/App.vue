<template>
  <div class="container">
    <div class="bg-info rounded p-4 m-2">
      <div class="row">
        <label for="contact">Contact Owner Name</label>
        <input
          type="text"
          name="contact"
          id="contact"
          class="mb-2"
          v-model="contactName"
        />
        <div
          class="col-12 bg-secondary mb-2 rounded"
          v-for="contact in contacts"
          :key="contact.name"
        >
          <input
            type="text"
            name="contactName"
            id="contactName"
            class="mb-2"
            v-model.lazy="contact.name"
          />
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownername"
            :is_favorite="contact.is_favorite"
          ></Contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import ButtonCounter from "./components/ButtonCounter.vue"
// const message = "Hello Vue"
import { reactive, ref } from "vue"
import Contact from "./components/Contact.vue"
const contactName = ref("github.com/DaviRFerreir4")

const contacts = reactive([
  {
    name: "Davi",
    phone: 40028922,
    // passando um valor dinâmico como prop
    ownername: contactName,
    is_favorite: false,
  },
  {
    name: "Roberto",
    phone: 45211896,
    // passando um valor fixo como prop
    ownername: contactName.value,
    is_favorite: true,
  },
  {
    name: "Alexandre",
    phone: 95423687,
    ownername: contactName,
    is_favorite: false,
  },
])
</script>

<style></style>
