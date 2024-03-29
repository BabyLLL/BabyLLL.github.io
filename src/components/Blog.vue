<template>
  <div>
    <div
      v-if="frontmatter.display ?? frontmatter.title"
      class="prose m-auto mb-8"
    >
      <h1 class="mb-0">{{ frontmatter.display ?? frontmatter.title }}</h1>

      <p v-if="tags && tags.length > 0">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="text-md border border-current rounded px-1 pb-0.2 mb-0 mr-1"
          :style="{ borderColor: tag.color, color: tag.color }"
          >{{ tag.name }}</span
        >
      </p>

      <p v-if="frontmatter.date" class="opacity-60 !-mt-2">
        {{ formatDate(frontmatter.date) }}
        <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      </p>

      <p v-if="frontmatter.subtitle" class="opacity-70 !-mt-6 italic">
        {{ frontmatter.subtitle }}
      </p>
    </div>
    <slot />
    <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8">
      <router-link
        :to="linkTo()"
        class="font-mono no-underline opacity-50 hover:opacity-75"
        >cd ..</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue'
import { formatDate } from '../utils'
import { useRoute } from 'vue-router'
import { useEventListener, isClient } from '@vueuse/core'

const route = useRoute()
const { frontmatter } = defineProps<{ frontmatter: any }>()

const tags = computed(() => {
  let { tags, tagsColor } = frontmatter
  if (tags && Array.isArray(tags)) {
    tagsColor = Array.isArray(tagsColor) ? tagsColor : []

    return tags.map((e: any, i: number) => ({
      name: e.trim(),
      color: tagsColor[i] ? `${tagsColor[i].trim()}` : 'currentcolor'
    }))
  }

  return []
})

function linkTo() {
  return getRoutePath().split('/').slice(0, -1).join('/') || '/'
}

function getRoutePath() {
  let path = route.path
  const isChildpages = route.path.indexOf('childpages') >= 0
  if (isChildpages) path = path.replace('childpages', 'posts')
  return path
}

if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document
        .querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEventListener(window, 'hashchange', navigate, false)

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault()
        const href = anchor.getAttribute('href') as string
        history.replaceState({}, '', href)
        navigate()
      })
    })

    navigate()
    setTimeout(navigate, 500)
  })
}
</script>
