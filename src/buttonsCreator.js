import Button from './modules/Button/button.js'

export const oneDirectionalArray = [ "tan", "cos", "sin", "sinh", "log", "ln", "sqr","e",  "x!"];
export const biDirectionalArray = [ "+", "-", "%", "x^y", "/","*" ];
export const numberArray = [...Array(10).keys()];
export const dotArray = ['.'];
export const PIArray = ['Π'];

export const numbers = createJSXSyntax( numberArray, "number" );
export const oneDirectional = createJSXSyntax(oneDirectionalArray, "onedirectional");
export const biDirectional = createJSXSyntax(biDirectionalArray,"bidirectional");
export const reset = createJSXSyntax(["reset"],"reset");
export const equal = createJSXSyntax([  "="  ],"equal");
export const del = createJSXSyntax([ "del" ],"delete");
export const dot = createJSXSyntax(dotArray,"dot"); 
export const PI = createJSXSyntax(PIArray,"PI"); 

/*Accepts array with buttons -
  Returns JSX Elements */
function createJSXSyntax(ar,type) {
  return ar.map( (button) => (<li className="listBtnItem" key={button}><Button text ={button} buttonType={type} /></li> ));
}
