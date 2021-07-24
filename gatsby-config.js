module.exports = {
    siteMetadata: {
        siteUrl: "https://www.bibaksandiego.org",
        title: "BIBAK San Diego",
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            }
        },
    ],
};
