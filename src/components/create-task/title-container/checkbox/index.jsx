import React from "react";
import styles from './styles.module.scss'

const Checkbox = () => {
    return (
        <div>
            <input type="checkbox" className={styles.checkbox} id="box"/>
            <label htmlFor="box"/>
        </div>
    )
}

export default Checkbox;