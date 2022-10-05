export default {
  title: "Meliorism",
  titleTemplate: "my hopes for a better world",
  description: "Inking my hopes, thoughts and ideas in my own digital space. Meliorism is the belief that the world tends to improve and that humans can aid its betterment.",
  
  footer: {
    message: "Made by Kumar Gaurav.",
    copyright: "Copyright © 2019-present by Kumar Gaurav",
  },
  lastUpdated: true,
  outDir: "./dist",
  themeConfig: {
    sidebar: [
      {
        text: "",
        items: [
          {
            text: "About Me",
            link: "/about-me",
          },
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
        text: "Random",
        items: [
          { text: "Quotes", link: "/quotes" },
          { text: "Tweets", link: "https://twitter.com/ikmrgrv" },
        ],
      },
    ],
    siteTitle: 'Meliorism'
  },

  // experiments
  // themes didn't work, my guess is
  // they work only for code-highlights
  // markdown: {
  //   theme: 'rose-pine-dawn',
  //   lineNumbers: true
  // }
};
