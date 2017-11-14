const express = require("express");
const comment = require("../comment/comment");
const mysql = require("mysql");
const pathLib = require("path");
const fs = require("fs");


const db = mysql.createPool({host:"localhost",user:"root",password:"ykn5820123456",database:"yueclass"});

module.exports = function () {
    let router = express.Router();
    //验证是否已经登录
    router.use((req, res, next) => {
        console.log(req.url);
        if (req.session["user_id"]) {
            next();
        } else {
            console.log(1111);
            let log_result = {
                islogin: false,
                str: "先登录再说"
            };
            //敏感操作需要先登录
            res.send(log_result).end();
        }
    });

    /**
     * 获取课程数据
     */
    router.get("/get_course",(req,res)=>{
        //查询用户有哪些课程
        db.query(`SELECT * FROM user_course_table WHERE account ="${req.query.id}"`,(err,data)=>{
            if (err){
                let result={
                    isgetting :false,
                    str:"数据库错误"
                };
                console.log(err);
                res.send(result).end();
            }else {
                if (data.length===0){
                    console.log("not found");
                    data.isgetting = false;
                    data.str = "not found";
                    res.send(data).end();
                }else {
                    //sql语句拼接，获得该用户所有的courseid
                    let course_id="";
                    for (var i=0;i<data.length-1;i++){
                        course_id+=data[i].courseid+",";
                    }
                    course_id += data[i].courseid;
                    //根据用户的课程号查询course_table中有该用户用哪些课程
                    const str = `SELECT * FROM course_table WHERE course_id in (${course_id})`;
                   db.query(str,(err,data)=>{
                        if (err){
                            console.log(err);
                        }else {
                            if (data.length===0){
                                console.log("not found");
                            }else {
                                res.send(data).end()
                            }
                        }
                   });
                }
            }
        });
    });

    /**
     * 获取对应课程的组员
     */
    router.get("/get_course/get_group",(req,res)=>{
        //先从user_course_table查询到对应的分组
        db.query(`SELECT coursegroup FROM user_course_table WHERE account = ${req.session["account"]} AND courseid=${req.query.courseid}`,(err,data)=>{
            if (err){
                console.log(err);
            }else {
                if (data.length===0)
                    console.log("not found");
                else {
                    let group = data[0].coursegroup;
                    //在从group_table查找到所有的组员的账号
                    db.query(`SELECT account FROM group_table WHERE courseid=${req.query.courseid} AND groupid=${group}`,(err,data)=>{
                        if (err){
                            console.log(err);
                        }else {
                            if (data.length===0)
                                console.log("not found");
                            else {
                                //sql语句拼接，获得该用户所有的courseid
                                let account="";
                                for (var i=0;i<data.length-1;i++){
                                    account+=data[i].account+",";
                                }
                                account += data[i].account;
                                console.log( data[i].account);
                                //从user_table中查询用户名
                                db.query(`SELECT username,account FROM user_table WHERE account in (${account})`,(err,data)=>{
                                    if (err){
                                        console.log(err)
                                    }else {
                                        console.log(data);
                                        res.send(data).end();
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    });

    /**
     * 上传评论信息
     */
    router.post("/upload_comment",(req,res)=>{
        if (req.body.account==""){
            console.log("空账号");
            res.send({successed:false}).end();
        }else {
            const resdata = {
                star_count:req.body.count,      //评论星星数
                comment_str:req.body.str,       //评论
                customid:req.body.id,       //被评论的人的id
                user_account:req.session["user_id"],    //评论的人的id
                course_id:req.body.course_id             //课程号
            };

            db.query(`INSERT INTO course_grade_table(ID,account,rev,course_id,score,str) VALUES(0,"${resdata.customid}", "${resdata.user_account}","${resdata.course_id}",${resdata.star_count},"${resdata.comment_str}")`,
                (err,data)=>{
                if (err){
                    console.log(err);
                }else {
                    console.log("success");
                }
            })
        }
    });

    /**
     * 上传作业
     */
    router.post("/homework",(req,res)=>{
        const sub =req.body.sub_value;            //课程号
        const ext = pathLib.parse(req.files[0].originalname).ext;       //文件拓展名

        const oldPath = req.files[0].path;        //老文件路径
        const newPath = oldPath+ext;                //新文件路径
        const newFileName = req.files[0].filename+ext;  //存在服务器的文件名
        const origName = req.files[0].originalname;     //文件原始名字

        // 对文件进行重命名
        fs.rename(oldPath,newPath,(err)=>{
            if (err){
                console.log(err);
                res.redirect(500,"http://localhost:3000/get/upload/result");
            }else{
                //首先验证这个账号是否有这门课
                db.query(`SELECT courseid FROM user_course_table WHERE account="${req.session["account"]}"`,(err,data)=>{
                    if(err){
                        console.log(err);
                        res.redirect(500,"http://localhost:3000/get/upload/result");
                    }else {
                        if (data.length===0){
                            console.log("没有数据");
                            res.redirect(500,"http://localhost:3000/get/upload/result");
                        }
                        else {
                            //检查是该生是否有这门课
                            let hasCourse = false;
                            for (let i=0;i<data.length;i++){
                                if (sub==data[i].courseid){
                                    hasCourse = true;
                                    break;
                                }
                            }
                            if (hasCourse===true){
                                //插入数据
                                db.query(`INSERT INTO coursework_table(ID,account,course_id,filename,origname)\
                                 VALUES(0,"${req.session["account"]}",${sub},"${newFileName}","${origName}")`,
                                    (err)=>{
                                        if (err){
                                            console.log(err);
                                            res.redirect(500,"http://localhost:3000/get/upload/result");
                                        }else {
                                            //定向一下
                                            res.redirect(200,"http://localhost:3000/get/upload/result");
                                        }
                                    });
                            }else{
                                res.redirect(500,"http://localhost:3000/get/upload/result");
                            }
                        }
                    }
                });
            }
        });
    });

    return router;
};