export const sidebar = {
  '/diary/': [
    {
      text: 'Diary Entries',
      items: []
    },
    {
      text: 'Latest journals',
      items: [
        { text: 'February 2023', link: '/diary/2023/february' },
        { text: 'January 2023', link: '/diary/2023/january' },
        { text: 'December 2022', link: '/diary/2022/december' },
      ]
    },
    {
      text: '2023',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'February 2023', link: '/diary/2023/february' },
        { text: 'January 2023', link: '/diary/2023/january' },
      ]
    },
    {
      text: '2022',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'December 2022', link: '/diary/2022/december' },
      ]
    }
  ],
  '/essays/': [
    {
      text: 'Essays',
      items: []
    },
    {
      text: 'Random',
      items: [
        { text: 'Opinions & its strength', 'link': '/essays/2' },
        { text: 'Comfort in Mediocrity', 'link': '/essays/3' }
      ]
    },
    {
      text: '',
      items: [
        { text: 'Engineering', link: '/engineering/' }
      ]
    }
  ],
  '/': [
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
      text: "Thoughts",
      items: [
        { text: "Why it feels so wrong?", link: "/essays/1" },
        { text: "Strong Opinions Weakly Held", link: "/essays/2" },
      ],
    },
    {
      text: "Engineering",
      items: [
        {
          text: "MacBook Setup",
          link: "/engineering/macbook-setup",
        },
        {
          text: "WebDevelopment Resources",
          link: "/engineering/webdevelopment-resources",
        },
        {
          text: "My Digital Library",
          link: "/engineering/my-digital-library",
        },
        {
          text: "Learnings in Software Engg",
          link: "/engineering/learnings-in-software-engineering",
        }
      ],
    },
    {
      text: "In Progress...",
      items: [
        {
          text: "Good to have Problems",
          link: "/essays/good-to-have-problems",
        }
      ],
    },
    {
      text: 'Random',
      items: [
        { text: 'Quotes', link: '/quotes' },
        { text: 'Tweets', link: 'https://twitter.com/ikmrgrv' }
      ]
    },
    {
      text: 'Essays',
      items: [
        { text: 'Why it feels so wrong?', link: '/essays/1' },
        { text: 'Strong Opinions Weakly Held', link: '/essays/2' }
      ]
    },
    {
      text: 'Diary Entries',
      items: [
        { text: 'January 2023', link: '/diary/2023/january' },
        { text: 'December 2022', link: '/diary/2022/december' },
      ]
    }
  ]
}


