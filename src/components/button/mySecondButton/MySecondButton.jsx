import React from "react";
import classes from './MySecondButton.module.css'

const MyButton = ({ children, ...props }) => {

    return (
        <div>
            <button {...props} className={classes.btn2}>{children}</button>
        </div>
    );
};

export default MyButton;