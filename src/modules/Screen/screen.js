import React from 'react';
import styles from './screen.module.css';
import {useSelector} from 'react-redux'

export const Screen = (props) => {
    const screenText = useSelector(state =>state.screenText);
    return(
        <section id={styles.screen}>
            <p className={styles.expression}>{screenText}</p>
        </section>
    )
}
export default Screen;