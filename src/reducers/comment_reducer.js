import * as actionTypes from "../constants/actionType";

const initialState = {modify:true,count:0,str:""};

export default function comment_reducer(state=initialState, action){
    switch (action.type){
        case actionTypes.STAR_COUNT:
            return action.data;
        case actionTypes.COMMENT_STR:
            return action.data;
        default:
            return state;
    }
};