import React from 'react'
import { Link } from "gatsby"

interface Props {
    
}

const Sidebar = (props: Props) => {
    return (
            <div className="grid__row_for_tags">
                <div className="sticky__area">
                    <div className="tag_area">
                        <div className="tag__heading">
                            <p className="tag__header">
                            DISCOVER MORE OF WHAT MATTERS TO YOU
                            </p>
                        </div>
                        <div>
                            <Link to="/">
                                <div className="tags_outline">
                                    <h4 className="tag_text">Javascript</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="tags_outline">
                                    <h4 className="tag_text">React</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="tags_outline">
                                    <h4 className="tag_text">Gatsby</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="footer__area">
                            <Link to="/">
                                <div className="footer_item_box">
                                    <h4 className="tag_text">Help</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="footer_item_box">
                                    <h4 className="tag_text">Privacy</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="footer_item_box">
                                    <h4 className="tag_text">Terms</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="footer_item_box">
                                    <h4 className="tag_text">About</h4>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="footer_item_box">
                                    <h4 className="tag_text">Careers</h4>
                                </div>
                            </Link>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;