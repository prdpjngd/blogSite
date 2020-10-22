import React, {Fragment} from 'react';
import './trending.css';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import {Link} from 'gatsby';
import logo from "../../assets/img/logo.svg";

const Trending = () => {
    return (
        <Fragment>
            <div className="TrendingBox">
                <div className="Box__inner">
                    <div className="trending_text_area">
                        <div className="circle_trend">
                        <TrendingUpSharpIcon fontSize="small"/>
                        </div>
                        <div>
                            <p className="trending_text">Trending On Medium</p>
                        </div>
                    </div>
                    <div className="trending_feed_area">
                        <div className="trending_list">
                            <div className="grid__wrapping">
                                <div className="grid__row">
                                    <div className="listing_zone">
                                        <div className="trend_box">
                                            <div className="trending_box">
                                                <div className="area_for_text">
                                                    <div className="author__area">
                                                        <p className="author__name">Author Name</p>
                                                    </div>
                                                    <Link to="/">
                                                    <h2 className="heading__title">
                                                    A Radical Proposal for Dealing with Trump Supporters After Biden Wins
                                                    </h2>
                                                    </Link>
                                                    <div className="time_date_area">
                                                        <div className="time_and_read">
                                                            <span className="timeanddate">
                                                                15 Oct
                                                            </span>
                                                            <div className="dot__area">
                                                                <span className="dot">.</span>
                                                            </div>
                                                            <span className="timeanddate">
                                                                4 min read
                                                            </span>
                                                        </div>
                                                        <div className="bookmark">
                                                            <TurnedInNotOutlinedIcon fontSize="small"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link to="/">
                                                    <img src={logo} alt="" width="150" height="113"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Trending;