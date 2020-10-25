import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout/Layout";
import Trending from "../components/Trending/Trending";
import BlogIndex from "../components/BlogIndex/BlogIndex";
import Sidebar from "../components/Sidebar/Sidebar";

function index({data}) {
    return (
        <Fragment>
            <Layout>
                <div className="TrendingBox">
                    <div className="Box__inner">
                        <Trending/>
                        <div className="trending_feed_area">
                            <div className="trending_list">
                                <div className="grid__wrapping">
                                    <div className="grid__row">
                                        <div className="listing_zone">
                                        {
                                            data.allContentfulBlogPost.edges.map(edge => (
                                                <BlogIndex 
                                                    key={edge.node.id}
                                                    title={edge.node.title}
                                                    slug={edge.node.slug}
                                                    readMinute={edge.node.readMinute}
                                                    createdAt={edge.node.createdAt}
                                                    imgFluid={edge.node.featuredImage.fluid}
                                                    author={edge.node.author.name} />
                                            ))
                                        }
                                        </div>
                                    </div>
                                    
                                    <Sidebar/>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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
                    id
                    slug
                    title
                    createdAt(formatString: "DD MMM")
                    readMinute
                    featuredImage {
                        id
                        fluid(maxWidth: 150) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    author {
                        name
                    }
                }
            }
        }
    }
`