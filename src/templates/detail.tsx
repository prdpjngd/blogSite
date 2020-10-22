import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export default ({data}) => {
    console.log(data);
    return (
        <div></div>
    )
}

export const query = graphql`
    query($slug: String!) {
        allContentfulBlogPost(filter: {slug: {eq: $slug}}) {
            edges {
              node {
                slug
                createdAt
                title
                updatedAt
                body {
                  body
                }
                featuredImage {
                  fluid{
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
        }
    }
`;