import styles from'./App.module.scss';
import CreateTask from "./components/create-task";
import React from "react";

function App() {
    return (
        <div className={styles.wrapper}>
            <CreateTask/>
        </div>
    );
}

export default App;
