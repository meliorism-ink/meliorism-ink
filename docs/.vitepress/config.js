import { sidebar } from './sidebar'

export default {
  title: "Meliorism",
  titleTemplate: "my hopes for a better world",
  description: "Inking my hopes, thoughts and ideas in my own digital space. Meliorism is the belief that the world tends to improve and that humans can aid its betterment.",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Diary', link: '/diary/' },
      { text: 'Essays', link: '/essays/' },
      { text: 'Engineering', link: '/engineering/' }
    ],
    sidebar,
    siteTitle: 'Meliorism'
  },
  footer: {
    message: "Made by Kumar Gaurav.",
    copyright: "Copyright © 2019-present by Kumar Gaurav",
  },
  outDir: '../dist',
  cleanUrls: 'without-subfolders'
};
