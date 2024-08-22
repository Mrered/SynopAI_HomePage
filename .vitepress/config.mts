import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SynopAI",
  description: "花小容 您的 AI 小秘",
  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,

  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SynopAI/' }
    ],
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: '版权所有 © 2024-至今 SynopAI'
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/'

    }
  }
})
