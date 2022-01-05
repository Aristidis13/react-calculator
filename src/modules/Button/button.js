import React from 'react';
import styles from './button.module.css'

export const Button = (props) => {
    return(
        <button type="button" className={styles.button} value={props.text} data-button-type={props.type}>
            {props.text}
        </button>
    )
}