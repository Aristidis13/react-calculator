import * as actions from './actions.js';
import * as h from './helper.js'

const initialState = {
    operator:null,
    num1: null,
    num2: null,
    screenText: ''
}

const reducer = (state= initialState, action=actions.pressBtn) => {
    let newNum1=null, newNum2=null;
    switch (action.type) {
        case 'reset': return h.returnAnswerState();
        case 'delete' : 
            [state.screenText,newNum1,state.operator,newNum2] = h.deletePressed(state.screenText,state.num1,state.operator,state.num2);
            return h.returnAnswerState(state,state.screenText,newNum1,state.operator,newNum2);
        case "equal" :
            [state.screenText,newNum1,state.operator,newNum2] = h.equalPressed(state.num1,state.operator,state.num2);
            return h.returnAnswerState(state,state.screenText,newNum1,state.operator,newNum2);
        case "number" : 
            [newNum1,newNum2] = h.numberPressed(state.num1,state.operator,state.num2,action.text)
            return h.returnAnswerState(state, state.screenText + action.text ,newNum1,state.operator,newNum2);
        case "bidirectional" :
            [state.screenText,newNum1,state.operator,newNum2] = h.bidirectionalPressed(action.text,state.num1,state.operator,state.num2);
            return h.returnAnswerState(state,state.screenText,newNum1,state.operator,newNum2);
        case "onedirectional" :
            [state.screenText,newNum1,state.operator,newNum2] = h.oneDirectionalPressed(action.text,state.num1,state.operator,state.num2);
            return h.returnAnswerState(state,state.screenText, newNum1,state.operator,newNum2);
        default: return h.returnAnswerState();
    }
}

export default reducer;
