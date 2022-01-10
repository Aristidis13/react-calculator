import * as actions from './actions.js';
import * as buttons from './../../buttonsCreator.js'
import helperObject from './helper.js'

const initialState = {
    screenState: 'void',
    screenText: '',
    symbols: []
}

const reducer = (state= initialState, action=actions.pressBtn) => {
    return findTheState(state,action);
}

export default reducer;

const findTheState = (state,action) => {

    switch (action.type) {
        case 'reset': return initialState;
        case 'delete' : return {
            // screenState: state.screenState==='hasNumber' && state.screenText.length===1
            //                                 ? 'void'
            //                                 : state.screenState==='hasNumber' 
            //                                     ? 'hasNumber'
            //                                     : state.screenState==='hasNumberAndBiDirectionalOperator'
            //                                         ? state.screenState==='hasNumber'
            //                                         : 'void',
            screenText: state.screenText.slice(0,state.screenText.length-1,1),
            symbols: state.symbols.slice(0,state.symbols.length-2)
        }
        case "number" : return {
            screenText: state.screenText + action.text,
            symbols: state.symbols.push({"type":"number","value": action.text})
        }
        case "bidirectional" : return {
            screenState: 'hasNumberAndBiDirectionalOperator',
            screenText: state.screenText + action.text
        }
        case "onedirectional" : return {
            screenState : "hasNumber",
            screenText: action.text + '('+state.screenText+')'
            // screenText : calculate(action.text,state.screenText)
        }
        case "parenthesized" : return {
            screenState: 'hasNumberAndBiDirectionalOperator',
            screenText: action.text + '['+state.screenText+']'
        }
        case "equal" :{
            // const operator = state.screenText.match(everyNonNumber).join(''); // Contains a string representation of the operator
            // const numbers = state.screenText.split(everyNonNumber);
            evaluateExpression(state.screenText);
            equalPressed(state)
            return {
                screenState : "hasNumber",
                screenText : /*calculate(operator,numbers[0],numbers[1])*/ "haha"
            }
        }
        default: return initialState;
    }
}

const calculateSymbol = (state,symbolType,newNumber) => {
    const lastSymbol = state.symbols.pop();
    switch(symbolType) {
        case "number": 
            if(lastSymbol.type==="number"|| lastSymbol.type==="dot") {
                lastSymbol.text += newNumber
            }
    }


}

const evaluateExpression = (expression) => {
    const everyParenthesizedOperator = helperObject.regularExpressions.everyParenthesizedOperator;
    const everyOneDirectionalOperator = helperObject.regularExpressions.everyOneDirectionalOperator;
    const splittedExpression= expression.split(helperObject.regularExpressions.everyParenthesizedOperator);

    helperObject.show(helperObject.regularExpressions.everyParenthesizedOperator);
    helperObject.show(splittedExpression);
    expressionsArray(expression);

}

let expressionsArray = expression => {
    if( !expression.endsWith(/*everyParenthesizedOperator | everyParenthesizedOperator*/ ']') )
        console.log('Located parenthesized operator');
}

const equalPressed = (state) => {
    const numbers = state.screenText.split(helperObject.regularExpressions.everyNonNumber);
    const operators = state.screenText.split(helperObject.regularExpressions.everyNumber);

    // console.log(helperObject.regularExpressions.oneDirectionalOperator);
    // console.group("Operators are:")
    // console.log(operators);
    // console.groupEnd();
    // console.group("Number are:");
    // console.log(numbers);
    // console.groupEnd();
}

const calculate = (operator,...number) => {
    switch(operator){
        case 'tan' : return Math.tan(number[0]);
        case 'cos' : return Math.cos(number[0]);
        case 'sin' : return Math.sin(number[0]);
        case 'sinh': return Math.sinh(number[0]);
        case  'e'  : return Math.exp(number[0]);
        case 'sqr' : return Math.sqrt(number[0]);
        case 'log' : return Math.log10(number[0]);
        case 'ln'  : return Math.log(number[0]);
        case 'x!'  : return factorial(number[0]);
        case '+'   : return parseInt(number[0]) + parseInt(number[1]);
        case '-'   : return number[0] - number[1];
        case '%'   : return number[0] % number[1];
        case '/'   : return number[0] / number[1];
        case 'x^y' : return Math.pow(number[0],number[1]);
        default : return 'error';
    }
}

const factorial = (n) => { 
    if(n>=0 && (n==1 || n==0)) return 1;
    else return n*factorial(n-1);
}