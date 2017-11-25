const express=require("express");
const static=require('express-static');
const bodyParser=require('body-parser');
const multer=require('multer');
const mysql=require('mysql');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');


// const multerObj=multer({dest: './static/upload'});

//新建服务器
const server = express();
server.listen(8080);


//获取请求数据，对post的数据进行解析
server.use(bodyParser.urlencoded({
    limit:2*1024*1024       //限制数据大小2mb
}));

// server.use(multerObj.any());  //接收文件

//设置cookie和session
const keys=[];          //session的keys
for (let i = 0;i<10000;i++){
    keys.push("keys"+Math.random());
}

server.use(cookieParser());
server.use(cookieSession({
    maxAge:60*60*1000,           //20min
    keys:keys,
    name:"session_id"
}));
//设置路由
server.use("/api/admin",require("./route/admin")());
server.use("/api/course",require("./route/course")());
//静态资源加载
server.use("/api/",express.static('./static/'));
