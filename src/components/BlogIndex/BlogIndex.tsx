import React from 'react';
import { Link } from "gatsby"
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import Img from 'gatsby-image';

const BlogIndex = ({title, readMinute, createdAt, slug, imgFluid, author}) => {
    return (
        <div className="trend_box">
            <div className="trending_box">
                <div className="area_for_text">
                    <div className="author__area">
                        <p className="author__name">{author}</p>
                    </div>
                    <Link to={`/${slug}`}>
                    <h2 className="heading__title">
                        {title}
                    </h2>
                    </Link>
                    <div className="time_date_area">
                        <div className="time_and_read">
                            <span className="timeanddate">
                                {createdAt}
                            </span>
                            <div className="dot__area">
                                <span className="dot">.</span>
                            </div>
                            <span className="timeanddate">
                                {readMinute} min read
                            </span>
                        </div>
                        <div className="bookmark">
                            <TurnedInNotOutlinedIcon fontSize="small"/>
                        </div>
                    </div>
                </div>
                <Link to={`/${slug}`}>
                    <Img fluid={imgFluid} alt={title} className="featured__image" />
                </Link>
            </div>
        </div>
    )
}

export default BlogIndex;