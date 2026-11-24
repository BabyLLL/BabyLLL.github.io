<template>
  <!-- The 3D canvas container. The engine renders into it and mounts the
       HUD, radar, phone and dialogs itself (engine/hud.js). It also takes
       over #loading and body classes; this template is static on purpose,
       so Vue never re-patches anything the engine mutates. -->
  <main id="world" aria-label="BabyLLL's World"></main>

  <div id="loading">
    <div class="loading-logo" data-loading-logo aria-hidden="true"></div>
    <div class="bar" role="progressbar" aria-label="Loading world" aria-valuemin="0" aria-valuemax="100" aria-valuenow="8"><i></i></div>
    <span class="loading-status"><span lang="zh-CN">加载中 8%</span><span lang="en">Loading 8%</span></span>
  </div>

  <SitePages />
</template>

<script setup>
import { onMounted } from 'vue'
import SitePages from './components/SitePages.vue'

// Boot the world once the DOM the engine expects (#world, #loading, #pages)
// is on the page. The engine module runs its own boot at import time.
onMounted(() => {
  import('../engine/main.js')
})
</script>
