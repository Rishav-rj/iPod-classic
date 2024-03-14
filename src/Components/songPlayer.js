import React from "react";
import { data } from "../data";
import styles from "./songPlayer.module.css"

class SongPlayer extends React.Component {
    constructor(){
        super()

        this.state={
            bar:0,
            currentTimeToBeDisplay:"0:00"
        }

        this.musicDuration="-:--"
        this.intarvalId = null
    }

    // Calling updateSongSatet once Component gets mounted
    componentDidMount(){
        this.updateSongState(this.props.currentSong);
    }

    // Conditional component updating
    componentDidUpdate(prevProps) {
        if (prevProps.currentSongIndex !== this.props.currentSongIndex) {
            const { currentSong } = this.props;
            this.updateSongState(currentSong);
        }
    }

    // Song update function with takes currect song as argument & set state for other variables
    updateSongState=(currentSong)=>{
        const {currentSongIndex} = this.props

        this.musicDuration = this.formatTime(data.Songs[currentSongIndex].duration);

        this.setState({
            bar:currentSong.currentTime,
            currentTimeToBeDisplay:this.formatTime(currentSong.currentTime)
        })

        this.intervalId ? clearInterval(this.intervalId) : this.intervalId = null;

        this.intervalId = setInterval(()=>{
            if(Math.round(currentSong.currentTime)>=Math.round(currentSong.duration)){
                clearInterval(this.intervalId);
                return
            }
            this.setState({
                bar:currentSong.currentTime,
                currentTimeToBeDisplay:this.formatTime(currentSong.currentTime)
            })
        }, 1000)

    }

    // Function for Formating time from one digit to two digit
    formatTime = (time) => {
        let min = Math.floor(time / 60);
        if (min < 10) {
            min = `0${min}`;
        }
         let sec = Math.floor(time % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min}  :  ${sec}`;
    }

    // Function for Updating Song Bar on click 
    barChange = (value) => {
        const { currentSong } = this.props;

        currentSong.currentTime = value;
        console.log("value", value);
        this.updateSongState(currentSong);
    }

    render(){
        const {currentSongIndex} = this.props;
        const song = data.Songs[currentSongIndex];
        return(
            <>
                <div className={styles.container}>
                    <div className={styles.songContainer}>
                        <div className={styles.image}>
                            <img src={song.cover} alt="SongImage"/>
                        </div>
                        <div className={styles.details}>
                            <h3>{song.name}</h3>
                            <p>{song.singer}</p>
                        </div>
                    </div>
                    <div className={styles.barContainer}>
                        <div className={styles.currectTime}>
                            {this.state.currentTimeToBeDisplay}
                        </div>
                        <div>
                        <input type="range" max={song.duration} value={this.state.bar} onChange={(event) => this.barChange(event.target.value)} className={styles.bar} />
                        </div>
                        <div className={styles.songDuration}>
                            {this.musicDuration}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default SongPlayer;