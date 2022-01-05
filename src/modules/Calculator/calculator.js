import {Screen} from '../Screen/screen.js';
import {buttonsThatAreNumbers as nbtns, 
        buttonsThatAreOperations as obtns,
        buttonsThatAreResults as rbtns} from '../../buttonsCreator.js';
import styles from './calculator.module.css';
import {Provider} from 'react-redux';
import store from './../redux/store.js';

export const Calculator = () => {  
    return(
    <Provider store={store}>
        <section id={styles.calculator}>
            <Screen input=""/>
            <div className={styles.buttons}>
                <ul id="numbers" className={styles.btnList}> {nbtns} </ul>
                <ul id="operations" className={styles.btnList}> {obtns} </ul>
                <ul id="results" className={styles.btnList}>{rbtns} </ul>
            </div>
        </section>
    </Provider>
    )
}  