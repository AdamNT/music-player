import React from 'react';

const SongCover = ({ size, imageSrc }) => (
    <div className={`song-cover song-cover--${size}`}>
        <img src={imageSrc} alt="" className="" />
    </div>
);

export default SongCover;
