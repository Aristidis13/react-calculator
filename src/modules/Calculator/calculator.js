import {Screen} from '../Screen/screen.js';
import {buttonsThatAreNumbers as nbtns, 
        buttonsThatAreOperations as obtns,
        buttonsThatAreResults as rbtns} from '../../buttonsCreator.js';



export const Calculator = () => {  
    return(
        <section id="container">
            <Screen input/>
            <div id="buttons">
                <ul id="number"> {nbtns} </ul>
                <ul id="operations"> {obtns} </ul>
                <ul id="results">{rbtns} </ul>
            </div>
        </section>
    )
}  