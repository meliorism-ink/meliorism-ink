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
        text: 'Essays',
        items: [
          { text: 'Why it feels so wrong?', link: '/essays/1' },
          { text: 'Strong Opinions Weakly Held', link: '/essays/2' },
        ]
      }
    ]
  },
  footer: {
    message: 'Made by Kumar Gaurav.',
    copyright: 'Copyright © 2019-present by Kumar Gaurav'
  }
}