import *as actionTypes from "../constants/actionType"
/**
 * 初始化redux状态的action
 */
export const initRedux = ()=>{
    return{
        type:actionTypes.INIT_REDUX,
    }
};