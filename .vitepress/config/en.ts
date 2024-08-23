import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Hua Xiaorong, your AI secretary',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/quickstart': { base: '/en/quickstart', items: sidebarQuickStart() },
      '/en/usage': { base: '/en/usage', items: sidebarUseage() }
    },

    editLink: {
      pattern: 'https://github.com/synopai/homepage/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear()} 云想亿熵(上海)智能科技有限责任公司`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'QuickStart',
      link: '/en/quickstart',
      activeMatch: '/en/quickstart'
    },
    {
      text: 'Usage',
      link: '/en/usage/information-gathering',
      activeMatch: '/en/usage'
    },
    {
      text: 'Try it',
      link: 'https://bing.com'
    }
  ]
}

function sidebarQuickStart(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'QuickStart',
      link: '/en/quickstart'
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
      text: 'Usage',
      collapsed: false,
      base: '/en/usage',
      items: [
        {text: 'information-gathering', link: '/information-gathering'},
        {text: 'academic-tutoring', link: '/academic-tutoring'},
        {text: 'emotional-companionship', link: '/emotional-companionship'},
        {text: 'trip-planning', link: '/trip-planning'}
      ]
    }
  ]
}