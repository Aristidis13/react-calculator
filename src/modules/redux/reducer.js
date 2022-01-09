import * as actions from './actions.js';

const initialState = {
    screenState: 'void',
    screenText: '',
}

const reducer = (state= initialState, action=actions.pressBtn) => {
    switch (action.type) {
        case 'reset': return initialState;
        case 'delete' : return {
            screenState: state.screenState==='hasNumber' && state.screenText.length===1
                                            ? 'void'
                                            : state.screenState==='hasNumber' 
                                                ? 'hasNumber'
                                                : state.screenState==='hasNumberAndBiDirectionalOperator'
                                                    ? state.screenState==='hasNumber'
                                                    : 'void',
            screenText: state.screenText.slice(0,state.screenText.length-1,1)
        }
        case "number" : return {
            screenState: state.screenState==='hasNumber' || state.screenState==='void' 
                        ? 'hasNumber'
                        :'hasTwoNumbers',
            screenText: state.screenText + action.text
        }
        case "bidirectional" : return {
            screenState: 'hasNumberAndBiDirectionalOperator',
            screenText: state.screenText + action.text
        }
        case "onedirectional" : return {
            screenState : "hasNumber",
            screenText : calculate(action.text,state.screenText)
        }  
        case "equal" :{
            const everyNonNumber = new RegExp(/[^0-9]/);
            const operator = state.screenText.match(everyNonNumber).join(''); // Contains a string representation of the operator
            const numbers = state.screenText.split(everyNonNumber);
            return {
                screenState : "hasNumber",
                screenText : calculate(operator,numbers[0],numbers[1])
            }
        }
        default: return initialState;
    }
}

export default reducer;

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