import { connect } from 'react-redux';
import { setActiveSong } from '../duck/actions/songs';
import SwiperSlider from './SwiperSlider.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setActiveSong
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwiperSlider);
