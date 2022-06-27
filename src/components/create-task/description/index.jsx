import React from "react";
import styles from './styles.module.scss'
import TitleType from "./title-type";


const Description = () => {
    return (
        <div className={styles.wrapper}>
            <TitleType/>
            <input type="submit" value="Click to add Description" className={styles.clickDescription}/>
        </div>
    )
}

export default Description;