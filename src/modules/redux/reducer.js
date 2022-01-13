import * as actions from './actions.js';
// import * as buttons from './../../buttonsCreator.js'

const initialState = {
    operator:null,
    num1: null,
    num2: null,
    screenText: ''
}

const reducer = (state= initialState, action=actions.pressBtn) => {
    let newNum1=null, newNum2=null;
    switch (action.type) {
        case 'reset': return returnAnswerState();
        case 'delete' : return {
            screenText: state.screenText.slice(0,state.screenText.length-1,1),
        }
        case "equal" : {
            console.log(state);

            return {
                ...state,
                screenText : calculate(state.operator,state.num1,state.num2),
                num1: state.screenText,
                num2: null,
                operator: null
            }
        }
        case "number" : {
            [newNum1,newNum2] = numberPressed(state.num1,state.operator,state.num2,action.text)
            console.log(newNum1,newNum2);
            return returnAnswerState(state, state.screenText + action.text ,newNum1,state.operator,newNum2);
        }
        case "bidirectional" : {
            [state.screenText,newNum1,state.operator,newNum2] = bidirectionalPressed(action.text,state.num1,state.operator,state.num2);
            console.log(newNum1,state.operator,newNum2);
            return returnAnswerState(state,state.screenText,newNum1,state.operator,newNum2);
        }
        case "onedirectional" : {
            [state.screenText,newNum1,state.operator,newNum2] = oneDirectionalPressed(action.text,state.num1,state.operator,state.num2);
            console.log(state.screenText,newNum1,state.operator,newNum2);
            return returnAnswerState(state,state.screenText, newNum1,state.operator,newNum2); //buggy
        }
        default: return returnAnswerState();
    }
}

export default reducer;

/* Helper Functions */

const returnAnswerState = (state, text='', n1=null,op=null,n2=null) => {
    return {
        ...state,
        screenText: text,
        num1: n1,
        operator: op,
        num2: n2,
    } 
};

const numberPressed = (n1,op,n2,newDigit) => {
    if(n1===null) return [n1=newDigit,null];
    else if(n1!==null && op===null) return [n1+=newDigit,null];
    else if(n1!==null && op!==null && n2===null) return [n1,n2=newDigit];
    else if(n2!==null) return [n1,n2 += newDigit];
}

const bidirectionalPressed = (biDirOp,n1,op,n2) => {
    let screenText;
    if(n2===null && n1!==null) {
        screenText = n1+biDirOp;
        return [screenText, n1,biDirOp,n2];
    }
    else if (n2!==null) {
        n1 = calculate(op,n1,n2);
        screenText=n1 + biDirOp;
        n2=null;
        return [screenText,n1,biDirOp,n2];
    }
    else if(n1===null && (biDirOp==="+" || biDirOp==="-")) {
        n1 = biDirOp;
        screenText=n1;
        return [screenText,n1,null,n2];
    }
    else if(n1===null)  return['',null,null,null];
}

const oneDirectionalPressed = (oneDirOp,n1,op,n2) => {
    let screenText;
    if(n2 !== null) {
        n2 = calculate(oneDirOp,parseInt(n2));
        screenText = n1.toString() + op + n2.toString();
        return [screenText,n1,op,n2];
    }
    else if(n1 !== null) {
        n1 = calculate(op,parseInt(n1))
        return [n1, n1, null, null];
    }
    else return ['',null,null,null]; // Safety condition- Never to be executed
}

const calculate = (operator,n1,n2) => {
     n1 = n1 % 1 ? parseFloat(n1) : parseInt(n1);
     n2 = n2 % 1 ? parseFloat(n2) : parseInt(n2);
    switch(operator) {
        case 'tan' : return Math.tan(n1);
        case 'cos' : return Math.cos(n1);
        case 'sin' : return Math.sin(n1);
        case 'sinh': return Math.sinh(n1);
        case  'e'  : return Math.exp(n1);
        case 'sqr' : return Math.sqrt(n1);
        case 'log' : return Math.log10(n1);
        case 'ln'  : return Math.log(n1);
        case 'x!'  : return factorial(n1);
        case '+'   : return n1 + n2;
        case '-'   : return n1 - n2;
        case '%'   : return n1 % n2;
        case '/'   : return n1 / n2;
        case 'x^y' : return Math.pow(n1,n2);
        case 'Π'   : return Math.PI;
        default : return 'error';
    }
}

const factorial = (n) => { 
    if(n>=0 && (n===1 || n===0)) return 1;
    else return n*factorial(n-1);
}