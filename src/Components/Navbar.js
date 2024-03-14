import React from "react";
import styles from "./navbar.module.css"

class Navbar extends React.Component {
    render(){
        return(
            <>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <p>iPod</p>
                    </div>
                    <div className={styles.time}>
                        {this.props.time}
                    </div>
                    <div className={styles.battery}>
                        <i className="fa-solid fa-battery-full"></i>
                    </div>

                </div>
            </>
        )
    }
}



export default Navbar;