export default {
  title: 'meliorism.ink',
  description: 'Inking my hopes | Kumar Gaurav',
  themeConfig: {
    sidebar: [
      {
        text: '',
        items: [
          {
            text: 'About Me',
            link: '/about-me'
          }
        ],

      },
      {
        text: 'Random',
        items: [
          { text: 'Quotes', link: '/quotes' },
          { text: 'Tweets', link: 'https://twitter.com/ikmrgrv' },
        ]
      },
      {
        text: 'Thoughts',
        items: [
          { text: 'Why it feels so wrong?', link: '/essays/1' },
          { text: 'Strong Opinions Weakly Held', link: '/essays/2' },
        ]
      },
      {
        text: 'Engineering',
        items: [
          { text: 'Learnings in Software Engineering', link: '/learnings-in-software-engineering' }
        ]
      }
    ]
  },
  footer: {
    message: 'Made by Kumar Gaurav.',
    copyright: 'Copyright © 2019-present by Kumar Gaurav'
  },
  outDir: './dist'
}