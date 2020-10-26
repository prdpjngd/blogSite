import React, {useContext} from 'react';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Img from 'gatsby-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {ActionContext} from "../../context/GlobalState";
import Modal from "../Modal/Modal";

const Article = ({title, author, createdAt, readMinute, img, body}) => {
    const {dispatch, loginModal, user, authenticated} = useContext(ActionContext);
    console.log(authenticated);
    console.log(user)
    const handleClose = () => {
      dispatch({
        type: "CLOSE_MODAL"
      })
    }

    const handleOpen = () => {
      dispatch({
        type: "OPEN_MODAL"
      })
    }

    const content = body.content.slice(0, 4);
    let new_content = {
        ...body,
        content
    }

    return (
        <>
        <article className="messager_box_area">
          <div>
            <div className="gapping"></div>
            <section className="article__area">
              <div className="top__inner_artclesss">
                <div className="text__and_name__area">
                  <div>
                    <h1 className="title__article">{title}</h1>
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
                              <span className="author_text_name">{author}</span>
                            </div>
                          </div>
                          <div className="date_and_read">
                            {createdAt} . {readMinute} min read
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
                    <Img fluid={img} alt={title} className="featured__image_main" />
                  </div>
                </div>
              </div>

              <div className="body__details_area">
                <div className="body__details_area_inner">
                  <span className="body_details">
                  {authenticated ? documentToReactComponents(body) : documentToReactComponents(new_content)}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </article>
        {!authenticated &&
        <>
        <div className="shade__for_Hide"></div>
        <div className="message_box_for_signin">
          <div className="message_box_for_signin_inner">
            <div className="message_box_for_signin_inner_outer">
              <div className="message__box_boundary">
                <h2 className="message_first_line">Read the rest of this story with a free account.</h2>
                <div className="SignIn_button_area">
                    <button className="login__button" onClick={handleOpen}>
                        Sign in
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        }
        {
            authenticated
            &&
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
        }

        {!authenticated && loginModal && <Modal handleClose={handleClose}/>}
        </>
    )
}

export default Article;