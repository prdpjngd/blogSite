import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import Header from "../components/Header";

function index() {
    return (
        <Fragment>
            <Header/>
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