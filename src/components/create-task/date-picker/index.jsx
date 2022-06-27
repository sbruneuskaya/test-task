import React from "react";
import styles from './styles.module.scss'
import DataPickerItem from "./data-picker-item";


const DataPicker = () => {
    return (
        <div className={styles.container}>
            <DataPickerItem/>
            <DataPickerItem/>

        </div>
    )
}

export default DataPicker;