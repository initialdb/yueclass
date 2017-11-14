import React,{Component} from "react"
import "./style.less"
import {post} from "../../fetch/post"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            account:this.props.userdata.account,
            password:this.props.userdata.password
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
                <p className="reg-btn">{this.props.link_title}</p>
                <button className="submit-btn" onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        );
    }

    componentDidMount(){
        //从服务器请求数据
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
                let reslut = post("http://localhost:3000/api/admin/login", userdata);
                reslut.then((res) => {
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
        else if(this.props.admin_type=="reg"){      //注册操作
            if (!(this.state.account || this.state.password)) {
                alert("账号或密码为空");
            }else {
                let userdata = {
                    account: this.state.account,
                    password: this.state.password
                };
                //提交数据到服务器
                let reslut = post("http://localhost:3000/api/admin/regist", userdata);
                reslut.then((res)=>{
                    return res.json();
                }).then((json)=>{
                    console.log(json);
                    //注册成功
                    if (json.isregist){
                        this.props.doSuccess();
                    }else {
                        console.log(json.str);
                    }
                });
            }
        }
    }

}

export default Login