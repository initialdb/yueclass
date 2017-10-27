import * as actionTypes from "../constants/actionType"

//user的reducer
const initialState = {
    account:"",         //账号
    password:"",        //密码
    islogin:false,      //是否登录
    issubmit:false      //账号密码是否提交
};

export default function user_reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.LOGIN_IN:
            return action.data;
        default:
            return state;
    }
}