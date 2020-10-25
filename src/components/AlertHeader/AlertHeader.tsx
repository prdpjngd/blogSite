import React from 'react'

interface Props {
    
}

const AlertHeader = (props: Props) => {
    return (
        <section className="messagener_box_border">
            <div className="messenger_box">
            <div className="box_area">
                <div className="main__box_messegner">
                <h4 className="messenger__text">
                    You have only <span className="main_stories_left_count">3</span> free stories to read for this month.
                </h4>
                </div>
            </div>
            </div>
        </section>
    )
}

export default AlertHeader
