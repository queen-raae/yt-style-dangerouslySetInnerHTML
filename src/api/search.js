const searchResults = {
  olso: [
    {
      name: "JAMstack <em>Oslo</em>",
      description: "The <em>Oslo</em> chapter of JAMstack",
    },
    {
      name: "Angular <em>Oslo</em>",
      description:
        "Angular <em>Oslo</em> Meetup’s mission is to help web front-end developers with selection of the best framework",
    },
    {
      name: "Rails Girls <em>Oslo</em>",
      description:
        "Nonprofit initiative with the aim to give tools and a community for women to understand technology and build their ideas.",
    },
  ],
  alez: [
    {
      name: "<em>Alex</em> Morton",
      description: "✨ Software engineer @OrbitModel",
    },
    {
      name: "<em>Alex</em> Moon",
      description:
        "Wandering Vagabond (https://t.co/8frwJ5z9O1).  Founder/Maintainer @gatsby_uc.  Opinions are my own. prev. @WPEngine @GatsbyJS - he/him",
    },
    {
      name: "<em>Alex</em> Barashkov",
      description:
        "Software engineer with 10+ years of web development experience. Currently focused on React, Next.js, Gatsby. CEO at Pixel Point.",
    },
  ],
};

export default async function handler(req, res) {
  res.send(searchResults[req.query.term] || []);
}
