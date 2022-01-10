import {Screen} from '../Screen/screen.js';
import * as btnTypes from './../../buttonsCreator.js'
import styles from './calculator.module.css';
import {Provider} from 'react-redux';
import store from './../redux/store.js';

export const Calculator = () => {  
    return(
    <Provider store={store}>
        <section id={styles.calculator}>
            <Screen input=""/>
            <div className={styles.buttons}>
                <ul id="numbers" className={styles.btnList}> {btnTypes.numbers} </ul>
                <div id="operations">
                    <ul className={styles.btnList}> {btnTypes.biDirectional} </ul>
                    <ul className={styles.btnList}> {btnTypes.parenthesized} </ul>
                    <ul className={styles.btnList}> {btnTypes.oneDirectional} </ul>
                </div>
                <ul id="results" className={styles.btnList}>
                    {btnTypes.reset}
                    {btnTypes.equal}
                    {btnTypes.del}
                </ul>
            </div>
        </section>
    </Provider>
    )
}  