<template>
  <div class="container">
    <div class="bg-info rounded p-4 m-2">
      <div class="row">
        <div class="row">
          <div class="col-6">
            <label for="contact">Contact Owner Name</label>
            <input
              type="text"
              name="contact"
              id="contact"
              class="mb-2"
              v-model="contactName"
            />
          </div>
          <div class="col-6">
            <label for="maxLuckyNumber">Max Lucky Number</label>
            <input
              type="number"
              name="maxLuckyNumber"
              id="contact"
              class="mb-2"
              v-model.number="maxLuckyNumber"
            />
          </div>
        </div>
        <AddContact :onAddContact="onAddContact"></AddContact>
        <div
          class="col-12 bg-secondary mb-2 rounded"
          v-for="contact in contacts"
          :key="contact.name"
        >
          <input
            type="text"
            name="contactName"
            id="contactName"
            class="mb-2 mt-3"
            v-model.lazy="contact.name"
          />
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownername"
            :is_favorite="contact.is_favorite"
            :email="contact.email"
            @update-favorite="
              contact.is_favorite = onUpdateFavorite($event, contact.phone)
            "
          ></Contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import ButtonCounter from "./components/ButtonCounter.vue"
// const message = "Hello Vue"
import { provide, reactive, ref } from "vue"
import Contact from "./components/Contact.vue"
import AddContact from "./components/AddContact.vue"

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

let maxLuckyNumber = ref(100)
provide("maxLuckyNumber", maxLuckyNumber)

function onUpdateFavorite(oldValues, phoneFromParent) {
  console.log(oldValues.name)
  console.log(oldValues.is_favorite)

  return !oldValues.is_favorite
}

function onAddContact(contact) {
  contact.ownername = contactName.value
  contact.is_favorite = false
  contacts.push(contact)
}
</script>

<style></style>
