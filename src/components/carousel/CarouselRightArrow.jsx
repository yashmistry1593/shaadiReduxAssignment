import React from 'react'

const CarouselRightArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--right"
            onClick={props.onClick}
        >
            <span className="fa fa-2x fa-angle-right" />
        </a>
    );
}
export default CarouselRightArrow
