import React, {useState} from "react";
import styles from './styles.module.scss'
import colors from './colors.jsx'
import classNames from "classnames";

const LabelColor = () => {
    const [activeCheckbox, setActiveCheckbox] = useState(null);


    return (
        <div className={styles.container}>
            <div className={styles.containerLabel}>Label color</div>
            <div className={styles.groupCheckbox}>
                {colors.map(item =>
                    <div className={styles.wrapperCheckbox}>
                        <input type="checkbox"
                               checked={item === activeCheckbox}
                               id={item.id}
                               className={classNames(styles.checkbox)}
                               onClick={() => setActiveCheckbox(item)}
                        />
                        <label htmlFor={item.id}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LabelColor;