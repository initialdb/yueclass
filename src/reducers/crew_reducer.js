import * as actionTypes from "../constants/actionType"

//小组的reducer
const initialState = {
    count:0,
    classmates:[{}]
};

export default function crew_reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.GROUP_CREW:
            return action.data;
        default:
            return state;
    }
}