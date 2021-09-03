import { resolve } from 'path'
import fs from 'fs-extra'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'

import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import anchor from 'markdown-it-anchor'
import markdownAttr from 'markdown-it-link-attributes'
import { slugify } from './scripts/slugify'

import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: [{ find: '/~/', replacement: `${resolve(__dirname, 'src')}/` }]
  },

  build: {
    // outDir: 'docs',
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT') next(warning)
      }
    }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@iconify/iconify',
      'dayjs',
      'dayjs/plugin/localizedFormat'
    ]
  },

  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    WindiCSS(),

    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: IconsResolver({
        componentPrefix: ''
      })
    }),

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'src/pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      }
    }),

    Markdown({
      wrapperComponent: 'Blog',
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\''
      },
      markdownItSetup(md) {
        md.use(Prism)
        md.use(anchor, {
          slugify,
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '#',
          permalinkAttrs: () => ({ 'aria-hidden': true })
        })

        md.use(markdownAttr, {
          pattern: /^https?:/,
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
      }
    }),

    Icons(),

    WindiCSS({
      safelist: 'prose prose-sm m-auto'.split(' '),
      preflight: {
        enableAll: true
      }
    })
  ]
})
