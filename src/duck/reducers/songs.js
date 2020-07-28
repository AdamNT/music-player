import {
    GET_PLAYLIST,
    SET_ACTIVE_SONG,
    SET_NEXT_SONG,
    TOGGLE_SONG_PLAY,
    SHUFFLE_PLAYLIST
} from '../actionTypes/songs';

const initState = {
    activeSong: {
        isPlayed: false
    },
    nextSong: {
        isPlayed: false
    },
    playlist: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_PLAYLIST:
            return {
                ...state,
                playlist: [...action.payload]
            };

        case SET_ACTIVE_SONG:
            return {
                ...state,
                activeSong: {
                    ...action.payload,
                    isPlayed: false
                }
            };

        case SET_NEXT_SONG:
            return {
                ...state,
                nextSong: {
                    ...action.payload,
                    isPlayed: false
                }
            };

        case TOGGLE_SONG_PLAY:
            return {
                ...state,
                activeSong: {
                    ...state.activeSong,
                    isPlayed: !state.activeSong.isPlayed
                }
            };

        case SHUFFLE_PLAYLIST:
            return {
                ...state,
                playlist: [...action.payload]
            };

        default:
            return state;
    }
};
