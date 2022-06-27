import Checkbox from "./checkbox";
import React from "react";
import styles from './styles.module.scss'

const TitleContainer=()=>{
    return(
        <div className={styles.titleContainer}>
            <p className={styles.title}>Create New task</p>
            <Checkbox/>
        </div>
    )
}

export default TitleContainer;