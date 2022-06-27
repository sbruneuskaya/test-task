import React from "react";
import styles from './styles.module.scss'
import Button from "./button";

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Button name="Cancel"/>
            <Button name="Save"/>
        </div>
    )
}

export default Footer;