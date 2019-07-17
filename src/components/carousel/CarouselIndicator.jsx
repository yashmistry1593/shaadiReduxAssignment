import React from 'react'

const CarouselIndicator = (props) => {
    return (
        <li>
            <a
                className={
                    props.index == props.activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                }
                onClick={props.onClick}
            />
        </li>
    );
}

export default CarouselIndicator
