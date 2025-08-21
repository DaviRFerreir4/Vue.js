<template>
  <div class="container border rounded p-2 bg-primary mb-2">
    <div class="text-center text-white mb-2">Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model.trim="contact.name"
            placeholder="Enter Name."
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model.number="contact.phone"
            placeholder="Enter Phone."
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model.trim="contact.email"
            placeholder="Enter E-mail."
          />
        </div>
        <div class="col-6 offset-3 p-2 mt-2">
          <button type="submit" class="btn btn-secondary w-100">
            Add Contact
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, defineEmits } from "vue"

const contact = reactive({
  name: "",
  phone: "",
  email: "",
})

const props = defineProps({
  onAddContact: Function,
})

function addContact() {
  props.onAddContact(contact)
}
</script>
