import { useStaticQuery, graphql } from "gatsby";

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
      sitePlugin(name: { eq: "@raae/gatsby-plugin-svg-emoji-favicon" }) {
        pluginOptions
      }
    }
  `);
  return {
    ...data?.site?.siteMetadata,
    emoji: data?.sitePlugin?.pluginOptions?.emoji,
  };
}
