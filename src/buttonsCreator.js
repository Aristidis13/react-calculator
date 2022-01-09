import Button from './modules/Button/button.js'

export const numbers = createJSXSyntax( [...Array(10).keys()], "number" );

export const oneDirectional = createJSXSyntax(
[ "tan", "cos", "sin", "sinh" ,  "e" , "sqr", "log", "ln" ,  "x!", "."], "onedirectional");

export const biDirectional = createJSXSyntax([ "+", "-", "%", "x^y", "/", ],"bidirectional");

export const reset = createJSXSyntax(["reset"],"reset");
export const equal = createJSXSyntax([  "="  ],"equal");
export const del = createJSXSyntax([ "del" ],"delete");

/*Accepts array with buttons -
  Returns JSX Elements */
function createJSXSyntax(ar,type) {
  return ar.map( (button) => (<li className="listBtnItem" key={button}><Button text ={button} buttonType={type} /></li> ));
}
