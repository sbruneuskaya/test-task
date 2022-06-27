import React from "react";
import styles from './styles.module.scss'
import TitleContainer from "./title-container";
import Description from "./description";
import Footer from "./footer";
import LabelColor from "./label-color";
import Select from "./select";
import DataPicker from "./date-picker";

const CreateTask = () => {
    return (
        <div className={styles.container}>
            <TitleContainer/>
            <Description/>
            <LabelColor/>
            <Select/>
            <DataPicker/>
            <Footer/>
        </div>
    )
}

export default CreateTask;