import React from 'react'

const CarouselSlide = (props) => {
    return (
        <li
            className={
                props.index == props.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
            }
        >
            <p className="carousel-slide__content">{props.slide}</p>

        </li>
    );
}

export default CarouselSlide
