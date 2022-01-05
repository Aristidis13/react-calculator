import {Screen} from '../Screen/screen.js';
import {buttonsThatAreNumbers as nbtns, 
        buttonsThatAreOperations as obtns,
        buttonsThatAreResults as rbtns} from '../../buttonsCreator.js';
import styles from './calculator.module.css';


export const Calculator = () => {  
    return(
        <section id={styles.calculator}>
            <Screen input=""/>
            <div className={styles.buttons}>
                <ul id="numbers" className={styles.btnList}> {nbtns} </ul>
                <ul id="operations" className={styles.btnList}> {obtns} </ul>
                <ul id="results" className={styles.btnList}>{rbtns} </ul>
            </div>
        </section>
    )
}  