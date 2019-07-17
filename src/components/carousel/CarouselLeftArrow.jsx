import React from 'react'

const CarouselLeftArrow = (props) => {
    return (
        <a
            href="#"
            className="carousel__arrow carousel__arrow--left"
            onClick={props.onClick}
        >
            <span className="fa fa-2x fa-angle-left" />
        </a>
    );

}

export default CarouselLeftArrow
