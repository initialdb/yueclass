import *as actionTypes from "../constants/actionType";

export const login = function (data) {
   return{
       type:actionTypes.LOGIN_IN,
       data
   }
};
