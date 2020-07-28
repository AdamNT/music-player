import React, { Fragment } from 'react';

import {
    SwiperSlider,
    NextSongBar,
    SongCover,
    SongNavigation,
    SongTime
} from '../../components';
import { NavigationView, PlaylistView } from '..';

const images = require.context('../../assets/images', true);
const imagePath = name => images(name, true);

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationIsActive: false,
            playlistIsActive: false
        };
    }

    componentDidMount = () => {
        const { getPlaylist } = this.props;
        getPlaylist();
    };

    toggleBooleanState = state => () => {
        this.setState(prevState => ({
            [state]: !prevState[state]
        }));
    };

    renderSongSlider = () => {
        const { activeSong, playlist } = this.props;

        if (playlist.length) {
            const slides = playlist.map(song => (
                <div className="swiper-slide" key={song.id}>
                    <div
                        className={`song-carousel__item ${
                            song.id === activeSong.id && activeSong.isPlayed
                                ? 'is-played'
                                : ''
                        }`}
                    >
                        <div className="daft">
                            <i className="icon-daft-logo" />
                        </div>
                        <SongCover
                            size="big"
                            imageSrc={imagePath(song.cover)}
                        />
                    </div>
                </div>
            ));

            const slideIndex = playlist.findIndex(
                song => song.id === activeSong.id
            );

            return (
                <SwiperSlider
                    className="song-carousel__swiper"
                    playlist={playlist}
                    slideIndex={slideIndex}
                >
                    {slides}
                </SwiperSlider>
            );
        }

        return null;
    };

    render() {
        const { navigationIsActive, playlistIsActive } = this.state;
        const {
            activeSong,
            nextSong,
            playlist,
            toggleSongPlay,
            shufflePlaylist
        } = this.props;

        return (
            <Fragment>
                <NavigationView
                    isActive={navigationIsActive}
                    onClick={this.toggleBooleanState('navigationIsActive')}
                    activeSong={activeSong}
                />
                <PlaylistView
                    isActive={playlistIsActive}
                    handleClickToggleNavigation={this.toggleBooleanState(
                        'playlistIsActive'
                    )}
                    handleClickPlay={toggleSongPlay}
                    activeSong={activeSong}
                    playlist={playlist}
                    hancleClickShuffle={shufflePlaylist}
                />
                <div className="main">
                    <div className="bck">
                        <div className="bck__overlay" />
                        <div className="bck__gradient" />
                        <img
                            className="bck__img"
                            src={imagePath('./bg_image.jpg')}
                            alt=""
                        />
                    </div>
                    <header className="header">
                        <div className="container">
                            <div className="header__wrapper">
                                <div className="back">
                                    <i className="icon-arrow-left" />
                                </div>
                                <div className="album">
                                    <div className="label">album</div>
                                    <div className="album-name">
                                        {activeSong.album}
                                    </div>
                                </div>
                                <div
                                    className="menu"
                                    onClick={this.toggleBooleanState(
                                        'navigationIsActive'
                                    )}
                                    onKeyPress={() => {}}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <i className="icon-more" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="song-carousel">
                        {this.renderSongSlider()}
                        <div className="song-info">
                            <div className="song-name">{activeSong.name}</div>
                            <div className="song-artist">
                                {activeSong.artist}
                            </div>
                        </div>
                    </div>
                    <SongNavigation
                        songIsPlayed={activeSong.isPlayed}
                        onClick={toggleSongPlay}
                    />
                    <div className="container">
                        <SongTime
                            songTime={activeSong.time}
                            activeSongId={activeSong.id}
                            songIsPlayed={activeSong.isPlayed}
                        />
                    </div>
                    <div className="sound-wave" />
                    <NextSongBar
                        onClick={this.toggleBooleanState('playlistIsActive')}
                        nextSong={nextSong}
                    />
                </div>
            </Fragment>
        );
    }
}

export default MainView;
