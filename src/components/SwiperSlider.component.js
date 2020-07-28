import React from 'react';
import Swiper from 'swiper';

class SwiperSlider extends React.Component {
    swiperRef = React.createRef();

    componentDidMount = () => {
        this.initSwiper();
    };

    componentDidUpdate = prevProps => {
        const { playlist, slideIndex } = this.props;
        this.newSlider.update();

        if (playlist !== prevProps.playlist) {
            this.newSlider.slideTo(slideIndex);
        }
    };

    initSwiper = () => {
        const mySwiperRef = this.swiperRef.current;
        this.newSlider = new Swiper(mySwiperRef, {
            slidesPerView: 'auto',
            centeredSlides: true,
            grabCursor: true
        });

        const { setActiveSong } = this.props;
        this.newSlider.on('transitionEnd', () => {
            setActiveSong(this.newSlider.realIndex);
        });
    };

    render() {
        const { className, children } = this.props;

        return (
            <div
                className={`swiper-container ${className}`}
                ref={this.swiperRef}
            >
                <div className="swiper-wrapper">{children}</div>
            </div>
        );
    }
}

export default SwiperSlider;
