import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SynopAI",
  description: "花小容 您的 AI 小秘",
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '文档',
        link: '/快速开始',
        activeMatch: '/快速开始'
      },
      {
        text: '示例',
        link: '/examples/',
        activeMatch: '/examples'
      },
      {
        text: '关于',
        link: '/更多内容',
        activeMatch: '/更多内容'
      },
      {
        text: '体验',
        link: 'https://bing.com'
      }
    ],

    sidebar: {
      '/快速开始': [{
        text: '快速开始',
        items: [
          {
            text: '1',
            link: '/快速开始'
          },
          {
            text: '2',
            link: '/快速开始'
          }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SynopAI/' }
    ]
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
