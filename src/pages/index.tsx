import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout/Layout";
import Trending from "../components/Trending/Trending";

function index() {
    return (
        <Fragment>
            <Layout>
                <Trending/>
            </Layout>
        </Fragment>
    )
}

export default index

export const query = graphql`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    createdAt
                    title
                    updatedAt
                    body {
                        body
                    }
                }
            }
        }
    }
`