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
            text: "Learnings in Software Engineering",
            link: "/engineering/learnings-in-software-engineering",
          },
          {
            text: "Setting up my mac and dev env",
            link: "/engineering/set-up-mac-for-dev",
          },
          {
            text: "Useful free resources for prototyping web-apps quickly",
            link: "/engineering/web-app-prototyping-free-resources",
          },
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
