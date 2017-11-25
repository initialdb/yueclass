import *as actionTypes from "../constants/actionType"

/**
 * 作业传输的action
 */
export const courseWork = (data)=>{
    return{
        type:actionTypes.COURSE_WORK,
        data
    }
};