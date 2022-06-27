import React from "react";
import styles from './styles.module.scss'


const DataPickerItem = () => {
    const today = new Date();
    let todayDate = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    return (
        <div className={styles.container}>
            <input type="date" name="date" id="date" defaultValue={todayDate} className={styles.date}/>
        </div>
    )
}

export default DataPickerItem;

