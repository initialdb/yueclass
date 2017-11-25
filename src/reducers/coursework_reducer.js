import *as actionTypes from "../constants/actionType"

const initialState = {
    files:[]
};

export default function coursework_reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.COURSE_WORK:
            return action.data;
        case actionTypes.INIT_REDUX:
            return initialState;
        default:
            return state;
    }
}