import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            {/* When input component is getting used, I get a label prop with the label text
              and an input prop which itself holds an object with configuration data for the input e.g id */}

            <label htmlFor={props.input.id}>{props.label}</label>
            {/* the spread operator ensures all the key value pairs in input object which we receive on prop
             input are added as prop to input */}
             
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input