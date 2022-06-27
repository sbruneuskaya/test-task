import React from "react";
import styles from './styles.module.scss'


const Select = () => {
    return (
        <div className={styles.container}>
            <select name="select" id="select" className={styles.select}>
                <option value="1">Select Assignee</option>
            </select>
        </div>
    )
}

export default Select;