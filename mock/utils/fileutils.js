const fs = require("fs");
const pathLib = require("path");

module.exports = {
    //重名文件
    rename:function (file) {
        const ext = pathLib.parse(file.originalname).ext;       //文件拓展名
        const oldPath = file.path;        //老文件路径
        const newPath = oldPath+ext;                //新文件路径

        fs.rename(oldPath,newPath,(err)=> {
            if (err) {
                console.log(err);
                return false;
            }else {
                return true;
            }
        });
    }
};