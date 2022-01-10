/* Contains functions and attributes that help in state calculation inside the reducer function */
import { parenthesizedArray,
         oneDirectionalArray,
         biDirectionalArray} from "./../../buttonsCreator.js"

const helperObject = {
    "regularExpressions": {
        "everyNonNumber": /[\D]+/,
        "everyNumber": /[\d$]/,
        "everyParenthesizedOperator": new RegExp( parenthesizedArray.join("|") ),
        "everyOneDirectionalOperator": '/'+oneDirectionalArray.join("|")+'[/',
    },
    "show": (msg)=> console.log(msg),
    "numberPressed": () => {

    }
}
export default helperObject