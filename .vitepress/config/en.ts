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
      '/en/get-started': { base: '/en/get-started', items: sidebarQuickStart() },
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
      text: 'Get Started',
      link: '/en/get-started',
      activeMatch: '/en/get-started'
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
      text: 'Get Started',
      link: '/en/get-started'
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
        {text: 'Information Gathering', link: '/information-gathering'},
        {text: 'Academic Tutoring', link: '/academic-tutoring'},
        {text: 'Emotional Companionship', link: '/emotional-companionship'},
        {text: 'Life Assistance', link: '/life-assistance'}
      ]
    }
  ]
}