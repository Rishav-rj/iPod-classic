import React from "react";
import styles from "./body.module.css"
import Display from "./display";
import Wheel from "./Wheel";

class Body extends React.Component {
    render(){
        // Destructuring all variables & functions from props
        const {state, wheelRef, okayBtnHandle, menuBtnHandle, currentSongIndex, playBtn, nextBtnHanddle, prevBtnHanddle} =  this.props;
        return(
            <>
                <div className={styles.container}>
                    <Display state={state}
                             currentSongIndex={currentSongIndex}/>

                    <Wheel  wheelRef={wheelRef}
                            okayBtnHandle={okayBtnHandle}
                            state={state}
                            menuBtnHandle={menuBtnHandle}
                            playBtn={playBtn}
                            nextBtnHanddle={nextBtnHanddle}
                            prevBtnHanddle={prevBtnHanddle}/>
                </div>
            </>
        )
    }
}

export default Body;