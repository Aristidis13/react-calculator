import {Button} from './modules/Button/button.js'

export const buttonsThatAreNumbers = createJSXSyntax( [...Array(10).keys()], "number" );

export const buttonsThatAreOperations = createJSXSyntax(
[ "del", "reset", "cos", "sin",  "r" ,   "e"  , "sqr", "x^y",
   "+" ,   "-"  ,  "x" ,  "/" , "log",   "Π"  ,  "x!",  "%" ], "operation"
);

export const buttonsThatAreResults = createJSXSyntax([ "reset", "=", "del"],"result");

/*Accepts array with buttons -
  Returns JSX Elements */
function createJSXSyntax(ar,type) {
    return ar.map( (button) => (<li key={button}><Button text ={button} data-btn-type={type} /></li> ));
}