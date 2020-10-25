import React, {Fragment} from 'react';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';

const Trending = () => {
    return (
        <Fragment>
            <div className="trending_text_area">
                <div className="circle_trend">
                <TrendingUpSharpIcon fontSize="small"/>
                </div>
                <div>
                    <p className="trending_text">Trending On Medium</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Trending;