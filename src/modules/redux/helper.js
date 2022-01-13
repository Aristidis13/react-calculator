/* Contains functions and attributes that help in state calculation inside the reducer function */
import { oneDirectionalArray,
         biDirectionalArray} from "./../../buttonsCreator.js"

const helpObj = {
     "regularExpressions": {
         "operator": /[\D]+/,
    //     "everyNumber": /[\d$]/,
    //     "everyOneDirectionalOperator": '/'+oneDirectionalArray.join("|")+'[/',
     },
    "show": (msg)=> console.log(msg),
}
export default helpObj