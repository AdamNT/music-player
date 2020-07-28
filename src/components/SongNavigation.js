import React from 'react';

const SongNavigation = ({ songIsPlayed, onClick }) => (
    <div className="song-navigation">
        <div className="song-navigation__item">
            <i className="icon-shuffle" />
        </div>
        <div className="song-navigation__item">
            <i className="icon-previous" />
        </div>

        <div
            className={`song-navigation__item song-navigation__item--play ${
                songIsPlayed ? 'is-active' : ''
            }`}
            onClick={onClick}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
        />
        <div className="song-navigation__item">
            <i className="icon-next" />
        </div>
        <div className="song-navigation__item">
            <i className="icon-repeat" />
        </div>
    </div>
);

export default SongNavigation;
