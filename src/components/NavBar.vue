<template>
  <header class="header">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDark" src="/logo-dark.svg" alt="logo" />
      <img v-show="!isDark" src="/logo.svg" alt="logo" />
    </router-link>

    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/posts">
          <span class="<md:hidden">Blog</span>
          <ri-article-line class="md:hidden" />
        </router-link>
        <a href="https://github.com/BabyLLL" target="_blank" title="GitHub">
          <uil-github-alt />
        </a>
        <a
          href="https://www.zhihu.com/people/lzhu-97-13"
          target="_blank"
          title="Zhihu"
        >
          <ri-zhihu-fill />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { isDark } from '../utils'
</script>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  align-items: start;
}

.nav .right > * {
  margin: auto;
}
</style>
