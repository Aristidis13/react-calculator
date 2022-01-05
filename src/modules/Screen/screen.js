import React from 'react';
import styles from './screen.module.css';

export const Screen = (props) => {
    return(
        <section id={styles.screen}>
            {props.input}
        </section>
    )
}

// Screen.show = (msg) => {
//     Screen.props.input += msg.toString();
// }