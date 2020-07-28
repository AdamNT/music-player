import React from 'react';
import { SongCover } from '../../components';

const images = require.context('../../assets/images', true);
const imagePath = name => images(name, true);

const NavigationView = ({ activeSong, isActive, onClick }) => (
    <div className={`navigation-popup ${isActive ? 'is-active' : ''}`}>
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div
                        className="back"
                        onClick={onClick}
                        onKeyPress={() => {}}
                        role="button"
                        tabIndex={0}
                    >
                        <i className="icon-arrow-left" />
                    </div>
                </div>
            </div>
        </header>
        {activeSong.cover && (
            <SongCover size="medium" imageSrc={imagePath(activeSong.cover)} />
        )}
        <div className="song-info">
            <div className="song-name">{activeSong.name}</div>
            <div className="song-artist">{activeSong.artist}</div>
        </div>

        <nav className="song-options">
            <ul className="song-options__nav">
                <li className="song-options__item">Add to playlist</li>
                <li className="song-options__item">Show album</li>
                <li className="song-options__item">Share with friends</li>
            </ul>
        </nav>
    </div>
);

export default NavigationView;
