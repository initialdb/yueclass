import * as actionTypes from "../constants/actionType.js"

//更新评论星星数
export const updateCommentStar = (data)=>{
        return {
            type: actionTypes.STAR_COUNT,
            data
        };
};

//更新评论
export const updateCommentStr = (data)=>{
        return {
            type:actionTypes.COMMENT_STR,
            data
        }
};