import React from 'react';

class SongTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidUpdate = prevProps => {
        const { songIsPlayed, activeSongId } = this.props;

        // if new song reset time
        if (prevProps.activeSongId !== activeSongId) {
            this.setState({ time: 0 });
        }

        if (songIsPlayed) {
            this.startTimer();
        } else {
            this.stopTimer();
        }
    };

    tick = () => {
        const { time } = this.state;
        const { songTime } = this.props;
        const seconds = this.stringTimeToSeconds(songTime);

        if (time < seconds) {
            this.setState(prevState => ({
                time: prevState.time + 1
            }));
        }
    };

    formatTime = () => {
        const { time } = this.state;
        const minutes = '0' + Math.floor(time / 60);
        const seconds = '0' + (time - minutes * 60);

        return minutes.substr(-1) + ':' + seconds.substr(-2);
    };

    stringTimeToSeconds = time => {
        const splitedTime = time.split(':');
        const seconds = Number(splitedTime[0]) * 60 + Number(splitedTime[1]);

        return seconds;
    };

    percentTime = () => {
        const { time } = this.state;
        const { songTime } = this.props;

        if (songTime !== undefined) {
            const seconds = this.stringTimeToSeconds(songTime);
            const percent = (time / seconds) * 100;

            return `${percent}%`;
        }

        return '0%';
    };

    startTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(this.tick, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    render() {
        const { songTime } = this.props;

        return (
            <div className="song-time">
                <div className="song-time__actual">{this.formatTime()}</div>
                <div className="song-time__timeline">
                    <div className="timeline__total" />
                    <div
                        className="timeline__active"
                        style={{ 'width': this.percentTime() }}
                    />
                </div>
                <div className="song-time__end">{songTime}</div>
            </div>
        );
    }
}

export default SongTime;
