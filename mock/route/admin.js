const express = require("express");
const comment = require("../comment/comment");
const mysql = require("mysql");


const db = mysql.createPool({host:"localhost",user:"root",password:"ykn5820123456",database:"yueclass"});

module.exports = function () {
  let router = express.Router();
  /**
   * 验证是否已经登录
   */
  router.use((req,res,next)=>{
      console.log(req.url);
     if (req.session["user_id"]||req.url==="/login"||req.url==="/regist"){
         next();
     }else{
         console.log(1111);
         let log_result={
             islogin:false,
             str:"先登录再说"
         };
         //敏感操作需要先登录
         res.send(log_result).end();
     }
  });

  /**
   * 登录验证
    */
  router.post("/login",(req,res)=>{
      //登录返回的数据
      let log_result = {
          islogin:false,
          str:""
      };
      let account = req.body.account;
      let password = req.body.password;
      db.query(`SELECT * FROM user_table WHERE account="${account}"`,(err,data)=>{
          if (err){
              console.log(err);
              log_result.str="数据库错误";
              res.status(500).send(log_result).end();
          }else {
              if(data.length===0){
                  log_result.str = "账号不存在";
                  res.status(200).send(log_result).end();
              }else {
                  if (data[0].password==password){
                      log_result = data[0];
                      log_result.str = "登录成功";
                      req.session["user_id"]=data[0].ID;
                      req.session["account"] = data[0].account;
                      log_result.islogin = true;
                      res.status(200).send(log_result).end();
                  }else {
                      log_result.str="密码错误";
                      res.status(200).send(log_result).end();
                  }
              }
          }
      });
  });

    /**
     * 注册验证
     */
    router.post("/regist",(req,res)=>{
        //注册返回的数据
        let reg_result = {
            isregist : false,
            str:""
        };
        let account = req.body.account;
        let password = req.body.password;
        db.query(`SELECT * FROM user_table WHERE account="${account}"`,(err,data)=>{
            if (err){
                console.log(err);
                reg_result.str = "数据库错误";
                res.send(reg_result).end();
            }else {
                if (data.length===0){
                    res.status(200);
                    db.query(`INSERT INTO user_table(account,password) VALUES ("${account}","${password}")`,(err,data)=>{
                        if (err){
                            console.log(err);
                            reg_result.str = "数据库错误";
                            res.send(reg_result).end();
                        }else {
                            reg_result = {
                                str:"注册成功",
                                isregist:true,
                            };
                            res.send(reg_result).end();
                        }
                    });
                }else{
                    reg_result.str = "用户名已存在";
                    res.send(reg_result).end();
                }
            }
        });
    });


  return router;
};