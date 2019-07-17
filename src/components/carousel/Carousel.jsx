import React, { Component } from 'react'
import '../../Carousel.css'
import CarouselIndicator from './CarouselIndicator'
import CarouselLeftArrow from './CarouselLeftArrow'
import CarouselRightArrow from './CarouselRightArrow'
import CarouselSlide from './CarouselSlide'
import Modal from '../Modal'

export class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            filterVal: 5,
            myData: [1, 2, 3, 4, 5],
            logValueList: [],
            showLog: false
        };
    }

    handleChange(e) {
        let slideList = [];
        this.setState({
            filterVal: e.target.value,
            logValueList: [...this.state.logValueList, e.target.value],
            activeIndex: 0
        }, () => {
            let slideList = [];
            for (let index = 1; index <= this.state.filterVal; index++) {
                slideList = [...slideList, index]
            }
            this.setState({
                myData: slideList
            })
        })
    }

    displayLog() {
        this.setState({
            showLog: !this.state.showLog
        })
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let slidesLength = this.state.myData.length;
        if (index < 1) {
            index = slidesLength;
        }
        --index;
        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let slidesLength = this.state.myData.length - 1;
        if (index === slidesLength) {
            index = -1;
        }
        ++index;
        this.setState({
            activeIndex: index
        });
    }

    render() {

        let options = Array.apply(null, Array(20));
        let optionList = options.map((item, i) => {
            return (<option value={++i}>{i}</option>)
        });

        return (
            <React.Fragment>


                <div className="filter-box">
                    <label htmlFor="slide-no">Select Slides : </label>
                    <select name="" id="slide-no" onChange={e => this.handleChange(e)}>
                        {(optionList)}
                    </select>
                </div>

                <div className="carousel-container">
                    <div className="carousel">
                        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                        <ul className="carousel__slides">
                            {this.state.myData.map((slide, index) =>
                                <CarouselSlide
                                    key={index}
                                    index={index}
                                    activeIndex={this.state.activeIndex}
                                    slide={slide}
                                />
                            )}
                        </ul>

                        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

                        <ul className="carousel__indicators">
                            {this.state.myData.map((slide, index) =>
                                <CarouselIndicator
                                    key={index}
                                    index={index}
                                    activeIndex={this.state.activeIndex}
                                    isActive={this.state.activeIndex == index}
                                    onClick={e => this.goToSlide(index)}
                                />
                            )}
                        </ul>
                    </div>
                </div>


                {this.state.logValueList.length > 0 && <div className="finish-button"><button onClick={() => this.displayLog()}>Finish</button></div>}

                <Modal showLog={this.state.showLog} logValueList={this.state.logValueList} closeModal={() => this.displayLog()} />
            </React.Fragment>
        );
    }
}

export default Carousel
