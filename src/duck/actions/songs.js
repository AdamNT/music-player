import axios from 'axios';
import {
    GET_PLAYLIST,
    SET_ACTIVE_SONG,
    SET_NEXT_SONG,
    TOGGLE_SONG_PLAY,
    SHUFFLE_PLAYLIST
} from '../actionTypes/songs';
import { endpoint } from '../../services/endpoint';

export const getPlaylist = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: endpoint.playlist
        })
            .then(response => {
                const { data } = response;

                dispatch({
                    type: GET_PLAYLIST,
                    payload: data
                });

                dispatch(setActiveSong(0));
            })
            .catch(() => {
                // error
            });
    };
};

export const setActiveSong = index => {
    return (dispatch, getState) => {
        const { playlist } = getState().songs;
        const currentSong = playlist[index];

        const nextSong = playlist[index + 1] || {
            'id': '',
            'cover': '',
            'name': '',
            'artist': '',
            'album': '',
            'time': '0:00'
        };

        dispatch({
            type: SET_ACTIVE_SONG,
            payload: currentSong
        });

        dispatch(setNextSong(nextSong));
    };
};

export const setNextSong = nextSong => ({
    type: SET_NEXT_SONG,
    payload: nextSong
});

export const toggleSongPlay = () => ({
    type: TOGGLE_SONG_PLAY
});

const shuffle = array => {
    let i, j, temp;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
export const shufflePlaylist = () => {
    return (dispatch, getState) => {
        const { activeSong, playlist } = getState().songs;
        const shufflePlaylist = shuffle(playlist);
        const activeSongIndex = shufflePlaylist.findIndex(
            song => song.id === activeSong.id
        );

        dispatch({
            type: SHUFFLE_PLAYLIST,
            payload: shufflePlaylist
        });

        dispatch(setActiveSong(activeSongIndex));
    };
};
