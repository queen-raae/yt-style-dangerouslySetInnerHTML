module.exports = {
  siteMetadata: {
    title: `Awesome Demo`,
    description: `One demo to rule them all`,
  },
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-svg-emoji-favicon",
      options: {
        emoji: "🎉",
      },
    },
  ],
};
