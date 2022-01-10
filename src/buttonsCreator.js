import Button from './modules/Button/button.js'

export const parenthesizedArray = ["tan", "cos", "sin", "sinh", "log", "ln", "sqr"];
export const oneDirectionalArray = [ "e",  "x!", "."];
export const biDirectionalArray = [ "+", "-", "%", "x^y", "/", ];

export const numbers = createJSXSyntax( [...Array(10).keys()], "number" );
export const oneDirectional = createJSXSyntax(oneDirectionalArray, "onedirectional");
export const parenthesized = createJSXSyntax(parenthesizedArray,"parenthesized");
export const biDirectional = createJSXSyntax(biDirectionalArray,"bidirectional");
export const reset = createJSXSyntax(["reset"],"reset");
export const equal = createJSXSyntax([  "="  ],"equal");
export const del = createJSXSyntax([ "del" ],"delete");

/*Accepts array with buttons -
  Returns JSX Elements */
function createJSXSyntax(ar,type) {
  return ar.map( (button) => (<li className="listBtnItem" key={button}><Button text ={button} buttonType={type} /></li> ));
}
