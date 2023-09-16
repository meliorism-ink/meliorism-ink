import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  outDir: '../dist',

  title: "Meliorism",
  titleTemplate: "thoughts for a better world",
  description: "Inking my hopes, thoughts and ideas. Meliorism is the belief that the world tends to improve and that humans can aid its betterment.",
  
  head: [
    ['link', { rel: 'stylesheet', type: 'css', href: '/main.css' }],
  ],
  footer: {
    message: "Made by Kumar Gaurav.",
    copyright: "Copyright © 2019-present by Kumar Gaurav",
  },
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Diary', link: '/diary/' },
      { text: 'Essays', link: '/essays/' },
      { text: 'Engineering', link: '/engineering/' }
    ],
    sidebar,
    siteTitle: 'Meliorism'
  }
});
