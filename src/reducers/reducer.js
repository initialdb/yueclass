import {combineReducers} from "redux";
import comment_reducer from "./comment_reducer";
import crew_reducer from "./crew_reducer"
import course_reducer from "./course_reducer";
import user_reducer from "./user_reducer"

export default combineReducers({
    comment_reducer,
    crew_reducer,
    course_reducer,
    user_reducer
});