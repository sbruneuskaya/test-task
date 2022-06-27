import React, {useState} from "react";
import styles from './styles.module.scss'


const TitleType = ()=>{
    const [count, setCount] = useState(0)

    const handleChange=(event)=>{
        const value = event.target.value
        setCount( value.length)
    }

    return(
        <div className={styles.wrapper}>
            <textarea type="text" placeholder="Title" maxLength="100" className={styles.text} onChange={handleChange}/>
            <span className={styles.userType}>{count}/100</span>
        </div>
    )
}

export default TitleType;