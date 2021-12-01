<template>
  <div>
    <NavBar />

    <main class="px-7 py-10">
      <router-view v-if="show" />
      <Footer></Footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
setTimeout(() => {
  show.value = true
}, 0)
</script>

<style></style>
