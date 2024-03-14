import React from "react";
import styles from "./wheel.module.css"

class Wheel extends React.Component {
    render(){
        // Destructuring all variables & functions from props
        const {wheelRef, okayBtnHandle, state, menuBtnHandle, playBtn, prevBtnHanddle, nextBtnHanddle} = this.props;

        return(
            <>
                <div className={styles.container}>
                    <div className={styles.wheel} ref={wheelRef}>
                        <div className={styles.menu} onClick={menuBtnHandle}>MENU</div>
                        <div className={styles.backward} onClick={prevBtnHanddle}>
                            <i className="fa-solid fa-backward"></i>
                        </div>
                        <div className={styles.forward} onClick={nextBtnHanddle}>
                            <i className="fa-solid fa-forward"></i>
                        </div>
                        <div className={styles.playPause} onClick={playBtn}>
                            <i className="fa-solid fa-play"></i>
                            <i className="fa-solid fa-pause"></i>
                        </div>
                        <div className={styles.okay} onClick={()=>okayBtnHandle(state.selectedOption)}></div>
                    </div>
                </div>
            </>
        )
    }
}



export default Wheel;
