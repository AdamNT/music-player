import React from 'react';

const NextSongBar = ({ onClick, nextSong }) => (
    <footer className="navigation-footer">
        <div className="container">
            <div className="navigation-footer__wrapper">
                <div
                    className="playlist-icon"
                    onClick={onClick}
                    onKeyPress={() => {}}
                    role="button"
                    tabIndex={0}
                >
                    <i className="icon-playlist" />
                </div>
                <div className="next-song">
                    <div className="next-song__label">next</div>
                    <div className="next-song__info">
                        <div className="next-song__name">{nextSong.name}</div>

                        <div className="next-song__time">{nextSong.time}</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default NextSongBar;
