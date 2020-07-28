import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const images = require.context('../../assets/images', true);
const imagePath = name => images(name, true);

class PlaylistView extends React.Component {
    scrollTo = () => {
        const { scrollbar } = this;
        const scrollPosition = scrollbar.getScrollTop() + 65;

        scrollbar.view.scroll({
            top: scrollPosition,
            behavior: 'smooth'
        });
    };

    renderPlaylist = () => {
        const { activeSong, playlist } = this.props;
        const items = playlist.map(song => (
            <div
                className={`playlist__song ${
                    activeSong.id === song.id ? 'is-active' : ''
                }`}
                key={song.id}
            >
                <div className="song__name">{song.name}</div>
                <div className="song__time">{song.time}</div>
            </div>
        ));

        const config = {
            autoHide: true,
            autoHeight: true,
            autoHeightMax: 680
        };

        return (
            <div className="playlist-wrapper">
                <Scrollbars
                    className="playlist"
                    ref={e => (this.scrollbar = e)}
                    {...config}
                >
                    {items}
                </Scrollbars>
                <div className="playlist-wrapper__gradient" />
            </div>
        );
    };

    render() {
        const {
            isActive,
            handleClickToggleNavigation,
            handleClickPlay,
            activeSong,
            hancleClickShuffle
        } = this.props;

        return (
            <div className={`playlist-popup ${isActive ? 'is-active' : ''}`}>
                <div className="bck">
                    <div className="bck__overlay" />
                    <img
                        className="bck__img"
                        src={imagePath('./bg_image.jpg')}
                        alt=""
                    />
                </div>
                <header className="header">
                    <div className="container">
                        <div className="header__wrapper">
                            <div
                                className="back"
                                onClick={handleClickToggleNavigation}
                                onKeyPress={() => {}}
                                role="button"
                                tabIndex={0}
                            >
                                <i className="icon-arrow-left" />
                            </div>
                            <div className="album">
                                <div className="song-name">
                                    {activeSong.name}
                                </div>
                                <div className="song-artist">
                                    {activeSong.artist}
                                </div>
                            </div>
                            <div
                                className={`song-navigation__item song-navigation__item--play ${
                                    activeSong.isPlayed ? 'is-active' : ''
                                }`}
                                onClick={handleClickPlay}
                                onKeyPress={() => {}}
                                role="button"
                                tabIndex={0}
                            />
                        </div>
                    </div>
                </header>
                <div className="container">
                    {this.renderPlaylist()}
                    <button
                        className="btn btn--green btn--radius btn--full-width text-upper"
                        onClick={hancleClickShuffle}
                        type="button"
                    >
                        Shuffle play
                    </button>

                    <div
                        className="scroll-icon"
                        onClick={this.scrollTo}
                        onKeyPress={() => {}}
                        role="button"
                        tabIndex={0}
                    >
                        <i className="icon-arrow-left" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistView;
