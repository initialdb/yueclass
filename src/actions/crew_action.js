import * as actionTypes from "../constants/actionType.js"
//更新小组信息
export const updateCrew = (data)=>{
    return{
        type:actionTypes.GROUP_CREW,
        data
    }
};