import React from "react";
import styles from "./display.module.css"
import Navbar from "./Navbar";
import {data} from "../data"
import SongPlayer from "./songPlayer";
import SinglePage from "./SinglePage";

class Display extends React.Component {
    constructor(){
        super()
        this.state={
            time:"00:00:00"
        }
    }

    componentDidMount() {
        // updating time per second
        setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000)
    }

    render(){
        // Destructuring all variables from props.state
        const {selectedOption, selectedMenu, singlePage, currentSong} = this.props.state
        const {currentSongIndex} = this.props
        const menu = Object.values(data)[selectedMenu];
        const menuItem = Object.keys(data)[selectedMenu];
        const songPlayer = (menuItem ==="Songs");
        return(
            <>  
                <div className={styles.container}>
                <Navbar time={this.state.time}/>

                    {
                        (!currentSong.paused || songPlayer)?
                        (<div className={styles.single}>
                            <SongPlayer currentSong={currentSong} currentSongIndex={currentSongIndex}/>
                        </div>
                        ):( 
                        !singlePage?(
                        <>
                        <div className={styles.innerContainer}>
                            <div className={styles.left}>
                            {
                                menu.map((item, index)=>(
                                    <p key={index}  className={index === selectedOption ? styles.selectedOption : ''}>{item.name}</p>
                                ))
                            }
                            </div>
                            <div className={styles.right}>
                            </div>
                        </div>
                        </>
                        ):(<div className={styles.single}>
                                <SinglePage selectedMenu={selectedMenu} selectedOption={selectedOption}/>
                            </div>
                            )
                        )
                    }
                    
                </div>
            </>
        )
    }
}

export default Display;