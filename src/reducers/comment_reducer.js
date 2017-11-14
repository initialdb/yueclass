import * as actionTypes from "../constants/actionType";
//评论的reducer
const initialState = {
    modify:true,
    count:0,        //星星数
    str:"",          //评论
    id:"" ,      //被评论的人的id
    course_id:""        //课程id
};

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