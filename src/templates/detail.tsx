import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout/Layout";
import AlertHeader from "../components/AlertHeader/AlertHeader";
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Img from 'gatsby-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({data}) => {
  const {node} = data.allContentfulBlogPost.edges[0];
    return (
      <Layout>
        <article className="messager_box_area">
          <AlertHeader/>
          <div>
            <div className="gapping"></div>
            <section className="article__area">
              <div className="top__inner_artclesss">
                <div className="text__and_name__area">
                  <div>
                    <h1 className="title__article">{node.title}</h1>
                  </div>
                  <div className="author_details_article">
                    <div className="author_details_article_internal">
                      <div className="author_details_article__area">
                        {/* <div>
                          <div className="author__image_area">
                            
                          </div>
                        </div> */}
                        <div className="author_name__and_date">
                          <div className="author__name_detaiks">
                            <div className="main__text_area_author">
                              <span className="author_text_name">{node.author.name}</span>
                            </div>
                          </div>
                          <div className="date_and_read">
                            {node.createdAt} . {node.readMinute} min read
                          </div>
                        </div>
                      </div>
                      <div className="icons__area">
                        <div className="align__icon_block">
                          <div className="per__icon_block">
                            <TwitterIcon fontSize="small"/>
                          </div>
                          <div className="per__icon_block">
                            <FacebookIcon fontSize="small"/>
                          </div>
                          <div className="per__icon_block">
                            <TurnedInNotOutlinedIcon fontSize="small"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ub">
                <div className="featured__image__block_area">
                  <div className="featured__image__block">
                    <Img fluid={node.featuredImage.fluid} alt={node.title} className="featured__image_main" />
                  </div>
                </div>
              </div>

              <div className="body__details_area">
                <div className="body__details_area_inner">
                  <span className="body_details">
                  {documentToReactComponents(node.body.json)}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </article>

        <div className="below__artcile">
          <div className="inner__end_article">
            <div className="inner_end_article_tag_area">
              <ul className="inner_artcile_ul">
                <li className="tags_li">
                  <span className="tag_box_below_artcle">
                    React
                  </span>
                </li>
                <li className="tags_li">
                  <span className="tag_box_below_artcle">
                    Javascript
                  </span>
                </li>
                <li className="tags_li">
                  <span className="tag_box_below_artcle">
                    Development
                  </span>
                </li>
              </ul>
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