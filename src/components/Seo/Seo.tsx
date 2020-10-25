import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
            siteMetadata {
                title
                description
            }
            }
        }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata ? site.siteMetadata.title : ""

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                name: `description`,
                content: metaDescription,
                },
                {
                property: `og:title`,
                content: title,
                },
                {
                property: `og:description`,
                content: metaDescription,
                },
                {
                property: `og:type`,
                content: `website`,
                },
                {
                name: `twitter:card`,
                content: `summary`,
                },
                {
                name: `twitter:title`,
                content: title,
                },
                {
                name: `twitter:description`,
                content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default Seo;