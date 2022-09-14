export default {
  title: "hope for better world",
  description: "Inking my hopes. Meliorism the belief that the world tends to improve and that humans can aid its betterment. Meliorism is my own personal digital space, where I share my thoughts and ideas. | Kumar Garuav",
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
        ],
      },
      {
        text: "In Progress...",
        items: [
          {
            text: "Good to have Problems",
            link: "/engineering/good-to-have-problems",
          },
          {
            text: "Learnings in Software Engg",
            link: "/engineering/learnings-in-software-engineering",
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
  },
  footer: {
    message: "Made by Kumar Gaurav.",
    copyright: "Copyright © 2019-present by Kumar Gaurav",
  },
  outDir: "./dist",
};
