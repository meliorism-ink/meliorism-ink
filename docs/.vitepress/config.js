export default {
  title: "meliorism.ink",
  description: "Inking my hopes | Kumar Gaurav",
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
