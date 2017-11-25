import React,{Component} from "react"
import "./style.less"
import {post} from "../../fetch/post"
import {Link} from "react-router-dom"
import nProgress from "nprogress";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            account:"",
            password:""
        };
    }

    render(){
        return(
            <div id="login">
                <div className="user">
                    <span>帐号:</span><input type="email" value={this.state.account} name="username"
                                           onChange={this.handleAccountChange.bind(this)}/>
                    <div className="parting-line"></div>
                </div>
                <div className="password">
                    <span>密码:</span><input type="password" value={this.state.password} name="password"
                                           onChange={this.handlePasswordChange.bind(this)}/>
                    <div className="parting-line"></div>
                </div>
                <Link to={this.props.link_url}><p className="reg-btn">{this.props.link_title}</p></Link>
                <button className="submit-btn" onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        );
    }

    componentDidMount(){
        //自动登录,记住密码
        if(this.props.admin_type=="log"&&localStorage.getItem("userdata")){
            const data = JSON.parse(localStorage.getItem("userdata"));
            const userdata = {
                account:data.account,
                password:data.password
            };
            //更新数据到state，免得等下存错了,但是感觉有点问题，暂时说不上来
            this.setState({
                account:data.account,
                password:data.password
            });
            //提交数据到服务器
            let reslut = post("http://123.207.242.39:3000/api/admin/login", userdata);
            nProgress.start();
            reslut.then((res) => {
                nProgress.done();
                return res.json();
            }).then((json) => {
                //登录成功
                if (json.islogin) {
                    //do something
                    let doSuccess = this.props.doSuccess;
                    doSuccess(this,json);
                } else {
                    console.log(json.str);
                }
            });
        }
    }


    //账号密码监听
    handleAccountChange(e){
        let val = e.target.value;
        this.setState({
                account:val
        });
    }

    handlePasswordChange(e){
        let val = e.target.value;
        this.setState({
            password:val
        });
    }

    //提交数据
    handleSubmit(){
        //登录操作
        if (this.props.admin_type=="log") {
            if (!(this.state.account || this.state.password)) {
                alert("账号或密码为空");
            } else {
                let userdata = {
                    account: this.state.account,
                    password: this.state.password
                };
                //提交数据到服务器
                let reslut = post("http://123.207.242.39:3000/api/admin/login", userdata);
                reslut.then((res) => {
                    return res.json();
                }).then((json) => {
                    //登录成功
                    if (json.islogin) {
                        //do something
                        let doSuccess = this.props.doSuccess;
                        doSuccess(this,json);
                    } else {
                        alert("登录失败");
                    }
                });
            }
        }
        //注册操作
        else if(this.props.admin_type=="reg"){
            if (!(this.state.account || this.state.password)) {
                alert("账号或密码为空");
            }else {
                let userdata = {
                    account: this.state.account,
                    password: this.state.password
                };
                //提交数据到服务器
                let reslut = post("http://123.207.242.39:3000/api/admin/regist", userdata);
                reslut.then((res)=>{
                    return res.json();
                }).then((json)=>{
                    //注册成功
                    alert("注册成功");
                    if (json.isregist){
                        this.props.doSuccess();
                    }else {
                        alert("注册失败");
                    }
                });
            }
        }
    }
}

export default Login