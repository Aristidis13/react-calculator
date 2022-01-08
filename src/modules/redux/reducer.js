const initialState = {
    screenState: 'void',
    screenText: '',
}

const reducer = (state= initialState,action) => {
    if (action.type ===  "reset") return state=initialState;
    else if (action.type === "delete") console.log("Delete pressed");
    else if (action.type === "number") console.log("Number pressed with value "+action.value);
    else if (action.type === "bidirectional") console.log("Bidirectional operator pressed with value "+action.value);
    else if (action.type === "onedirectional") console.log("Onedirectional operator pressed");
    else if (action.type === "equal") console.log("Equal pressed");
    return initialState;
}
/* Thelei switch gia kathe pithani katastash tou calculator 
const numberPressed = (type,text) = {
        screenState: 'hasNumber',
        screenText: state.screenText + text
    }
*/
export default reducer;