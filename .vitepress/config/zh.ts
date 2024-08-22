import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '花小容 您的 AI 小秘',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/快速开始': { base: '/快速开始', items: sidebarQuickStart() },
      '/使用场景': { base: '/使用场景', items: sidebarUseage() }
    },

    editLink: {
      pattern: 'https://github.com/synopai/homepage/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} SynopAI`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '快速开始',
      link: '/快速开始',
      activeMatch: '/快速开始'
    },
    {
      text: '使用场景',
      link: '/使用场景/信息收集',
      activeMatch: '/使用场景'
    },
    {
      text: '体验',
      link: 'https://bing.com'
    }
  ]
}

function sidebarQuickStart(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '快速开始',
      link: '快速开始'
      // collapsed: false,
      // items: [
      //   {
      //   },
      // ]
    }
  ]
}

function sidebarUseage(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '使用场景',
      collapsed: false,
      base: '/使用场景',
      items: [
        {text: '信息收集', link: '/信息收集'},
        {text: '课业辅导', link: '/课业辅导'},
        {text: '情感陪伴', link: '/情感陪伴'},
        {text: '生活辅助', link: '/生活辅助'}
      ]
    }
  ]
}

// export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
//   zh: {
//     placeholder: '搜索文档',
//     translations: {
//       button: {
//         buttonText: '搜索文档',
//         buttonAriaLabel: '搜索文档'
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: '清除查询条件',
//           resetButtonAriaLabel: '清除查询条件',
//           cancelButtonText: '取消',
//           cancelButtonAriaLabel: '取消'
//         },
//         startScreen: {
//           recentSearchesTitle: '搜索历史',
//           noRecentSearchesText: '没有搜索历史',
//           saveRecentSearchButtonTitle: '保存至搜索历史',
//           removeRecentSearchButtonTitle: '从搜索历史中移除',
//           favoriteSearchesTitle: '收藏',
//           removeFavoriteSearchButtonTitle: '从收藏中移除'
//         },
//         errorScreen: {
//           titleText: '无法获取结果',
//           helpText: '你可能需要检查你的网络连接'
//         },
//         footer: {
//           selectText: '选择',
//           navigateText: '切换',
//           closeText: '关闭',
//           searchByText: '搜索提供者'
//         },
//         noResultsScreen: {
//           noResultsText: '无法找到相关结果',
//           suggestedQueryText: '你可以尝试查询',
//           reportMissingResultsText: '你认为该查询应该有结果？',
//           reportMissingResultsLinkText: '点击反馈'
//         }
//       }
//     }
//   }
// }