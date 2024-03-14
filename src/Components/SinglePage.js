import React from "react";
import { data } from "../data";
import styles from "./singlePage.module.css"

class SinglePage extends React.Component {

    render(){
        // Destructuring all variables from props
        const {selectedMenu, selectedOption} = this.props;
        const selectedItem = Object.values(data)[selectedMenu][selectedOption];

        return(
            <>  
                <p className={styles.icon}>
                    <i className={selectedItem.icon} style={{color:selectedItem.color}}></i>
                </p>
                <h1 className={styles.heading}>{selectedItem.name}</h1>
            </>
        )
    }

}

export default SinglePage;