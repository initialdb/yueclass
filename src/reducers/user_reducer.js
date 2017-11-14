import * as actionTypes from "../constants/actionType"

//user的reducer
const initialState = {
    account:"",         //账号
    password:"",        //密码
    username:"无",
    classgrade:"无",
    headsrc:"",
    islogin:false,      //是否登录
    isregist:false          //是否注册
};

export default function user_reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.LOGIN_IN:          //登录
            return action.data;
        case actionTypes.REGIST_USER:       //注册
            return action.data;
        default:
            return state;
    }
}