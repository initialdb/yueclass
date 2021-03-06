import *as actionTypes from "../constants/actionType";

const initialState = {
    count:0,
    course:[]
};

export default function (state=initialState,action) {
    switch (action.type){
        case actionTypes.UPDATE_COURSE:
            return action.data;
        case actionTypes.INIT_REDUX:
            return initialState;
        default:
            return state;
    }
}