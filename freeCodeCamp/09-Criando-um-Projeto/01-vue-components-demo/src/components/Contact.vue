<template>
  <h3>Name: {{ name }}</h3>
  <p>Email: {{ email }}</p>
  <p>Phone: {{ phone }}</p>
  <div class="row">
    <p class="float-end small" v-if="ownername !== ''">
      * this contact info belongs to {{ ownername }}
    </p>
    <div class="col-6 mb-4">
      <button
        class="btn form-control"
        :class="is_favorite ? 'btn-warning' : 'btn-success'"
        @click="toggleFavorite"
      >
        {{ is_favorite ? "Remove from" : "Add to" }} favorite
      </button>
    </div>
    <div class="col-6 mb-3">
      <LuckyNumber></LuckyNumber>
    </div>
  </div>
</template>
<script setup>
import LuckyNumber from "./LuckyNumber.vue"
// const email = ref("davi@email.com") // tem preferência acima da prop no chamado do componente

const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "- n/a -" },
  is_favorite: Boolean,
})

const emit = defineEmits(["update-favorite"])

function toggleFavorite() {
  emit("update-favorite", { is_favorite: props.is_favorite, name: props.name })
}
</script>
