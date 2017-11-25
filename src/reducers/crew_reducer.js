import * as actionTypes from "../constants/actionType"

//小组的reducer
const initialState = {
    count:0,
    classmates:[{}],
    course_id:""
};

export default function crew_reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.GROUP_CREW:
            return action.data;
        case actionTypes.INIT_REDUX:
            return initialState;
        default:
            return state;
    }
}