import React, {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(prev => prev + 1)
    }

    return (
        <div>
            <h1 className={classes.title}>{value}</h1>
            <button className={classes.btn} onClick={increment}>+</button>
        </div>
    );
};