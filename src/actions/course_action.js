import *as actionType from "../constants/actionType";

//课程更新action
export const updateCourse = function (data) {
    return{
      type:actionType.UPDATE_COURSE,
      data
    }
};