import React from "react";
import styles from './styles.module.scss'


const Button = (props) => {
    return (
        <div className={styles.container}>
            <p>{props.name}</p>
        </div>
    )
}

export default Button;