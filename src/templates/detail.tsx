import React, {useContext} from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Article from "../components/Article/Article";
export default ({data}) => {
  const {node} = data.allContentfulBlogPost.edges[0];

    return (
      <Layout>
        <Seo title={node.title}/>
        

        <Article 
          title={node.title}
          author={node.author.name}
          img={node.featuredImage.fluid}
          body={node.body.json}
          readMinute={node.readMinute}
          createdAt={node.createdAt}
        />

        <div className="footer__black_detail">
          <div className="footer__iner_box">
            <div className="footer__iner_item">
              <div className="footer_upercase_area">
                <div className="footer_text_area_main">
                  <div className="footer_per_item">
                    <h2 className="main_headeing_footer">Learn More</h2>
                    <h4 className="main_detail_footer">
                    Medium is an open platform where 170 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Learn more
                    </h4>
                  </div>
                  <div className="footer_per_item">
                    <h2 className="main_headeing_footer">Make Medium Yours</h2>
                    <h4 className="main_detail_footer">
                    Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox. Explore
                    </h4>
                  </div>
                  <div className="footer_per_item">
                    <h2 className="main_headeing_footer">Share your Thinking</h2>
                    <h4 className="main_detail_footer">
                    If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic. Write on Medium                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allContentfulBlogPost(filter: {slug: {eq: $slug}}) {
            edges {
              node {
                slug
                createdAt(formatString: "DD MMM")
                title
                updatedAt
                readMinute
                body {
                  json
                }
                featuredImage {
                  fluid(maxWidth: 1192){
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
`;