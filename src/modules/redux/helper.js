/*Contains Helper Functions that calculate state changes*/
export const equalPressed = (n1,op,n2) => {
    let screenText = '';
    if(n2!==null) {
        screenText = n1 = calculate(op,n1,n2);
        n2 = op= null;
    }
    else if(n2===null && n1!==null) {
        op=null;
        screenText=n1;
    }
    return [screenText, n1,op,n2];
};

export const deletePressed = (screenText,n1,op,n2) => {
    if(n2!==null) {
        n2 = Number(n2).toString().substring(0,n2.length-1);
        screenText = screenText.substring(0,screenText.length-1);
    }
    else if(n2===null && op!==null) {
        op=null;
        screenText = screenText.substring(0,screenText.length-1);
    }
    else if( op===null && n1!==null) {
        n1 = Number(n1).toString().substring(0,n1.length-1);
        screenText = screenText.substring(0,screenText.length-1);
    }
    else if(n1===null) screenText='';
    return [screenText, n1,op,n2];
}

export const numberPressed = (n1,op,n2,newDigit) => {
    if(n1===null) return [n1=newDigit,null];
    else if(n1!==null && op===null) return [n1+=newDigit,null];
    else if(n1!==null && op!==null && n2===null) return [n1,n2=newDigit];
    else if(n2!==null) return [n1,n2 += newDigit];
};

export const bidirectionalPressed = (biDirOp,n1,op,n2) => {
    let screenText='';
    if(n2!==null && n1!==null) {
        n1 = calculate(op,n1,n2);
        screenText = n1 + biDirOp;
        op=biDirOp;
        n2 = null; // The action reduces the numbers to 1 new number
    }
    else if(n2===null && n1!==null) {
        screenText = n1+biDirOp;
        op=biDirOp; // New operator is assigned
    }
    else if(n1===null && (biDirOp==="+" || biDirOp==="-")) {
        n1 = biDirOp;
        screenText=n1;
        return [screenText,n1,null,n2];
    }
    return [screenText,n1,op,n2];
};

export const oneDirectionalPressed = (oneDirOp,n1,op,n2) => {
    let screenText='';
    if(n2 !== null) {
        n2 = calculate(oneDirOp,n2);
        screenText = n1.toString() + op + n2.toString();
    }
    else if(n1 !== null) {
        screenText = n1 = calculate(oneDirOp,n1);
    }
    return [screenText,n1,op,n2];
};

const calculate = (operator,n1,n2=null) => {
    switch(operator) {
        case '|x|' : return Math.abs(n1);
        case  'e'  : return Math.exp(n1);
        case 'sqr' : return Math.sqrt(n1);
        case 'log' : return Math.log10(n1);
        case 'ln'  : return Math.log(n1);
        case 'x!'  : return factorial(n1);
        case '+'   : return Number(n1) + Number(n2);
        case '-'   : return Number(n1) - Number(n2);
        case '%'   : return n1 % n2;
        case '/'   : return n1 / n2;
        case '*'   : return n1 * n2;
        case 'pow' : return Math.pow(n1,n2);
        default : return 'error';
    }
};

const factorial = (n) => { 
    if(n>=0 && (n===1 || n===0)) return 1;
    else return n*factorial(n-1);
};

export const returnAnswerState = (state, text='', n1=null,op=null,n2=null) => {
    return {
        ...state,
        screenText: text,
        num1: n1,
        operator: op,
        num2: n2,
    } 
};