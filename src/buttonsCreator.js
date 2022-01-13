import Button from './modules/Button/button.js'

export const oneDirectionalArray = [ "log", "ln", "sqr", "e", "x!", "|x|"];
export const biDirectionalArray = [ "+", "-", "%", "pow", "/","*" ];
export const numberArray = [...Array(10).keys()];

export const numbers = createJSXSyntax( numberArray, "number" );
export const oneDirectional = createJSXSyntax(oneDirectionalArray, "onedirectional");
export const biDirectional = createJSXSyntax(biDirectionalArray,"bidirectional");
export const reset = createJSXSyntax(["reset"],"reset");
export const equal = createJSXSyntax([  "="  ],"equal");
export const del = createJSXSyntax([ "del" ],"delete");

/*Accepts array with buttons -
  Returns JSX Elements */
function createJSXSyntax(ar,type) {
  return ar.map( (button) => (<li className="listBtnItem" key={button}><Button text ={button} buttonType={type} /></li> ));
}
