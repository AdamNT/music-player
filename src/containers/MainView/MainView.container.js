import { connect } from 'react-redux';
import {
    getPlaylist,
    setActiveSong,
    toggleSongPlay,
    shufflePlaylist
} from '../../duck/actions/songs';
import MainView from './MainView.component';

const mapStateToProps = state => ({
    activeSong: state.songs.activeSong,
    nextSong: state.songs.nextSong,
    playlist: state.songs.playlist
});

const mapDispatchToProps = {
    getPlaylist,
    setActiveSong,
    toggleSongPlay,
    shufflePlaylist
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainView);
