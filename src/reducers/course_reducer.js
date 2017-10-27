import *as actionTypes from "../constants/actionType";

const initialState = {
    count:0,
    data:[]
};

export default function (state=initialState,action) {
    switch (action.type){
        case actionTypes.UPDATE_COURSE:
            return action.data;
        default:
            return state;
    }
}