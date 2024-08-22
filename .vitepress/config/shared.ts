import { defineConfig } from 'vitepress'
// import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: "SynopAI",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  ignoreDeadLinks: true,

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: {
    //      ...zhSearch,
    //     }
    //   }
    // },

  }
})
