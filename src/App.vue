<template>
  <main>
    <NavBar />

    <section>
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '/~/pages/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar }
})
</script>

<style></style>
