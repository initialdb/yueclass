import React,{Component} from "react";
import Login from "../../components/login/login";
import "./style.less";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import *as userAction from "../../actions/user_action";

class UserLogin extends Component{
    constructor(props){
        super(props);
    }

    render(){
            return(
                <div id="user">
                    <p className="login-title">邮箱/手机登录</p>
                    <Login  admin_type = "log" userdata = {this.props.userdata} updateUserdata={this.props.userdataUpdate} link_title="过来注册"
                            doSuccess={this.logSuccess.bind(this)} history={this.props.history}
                    />
                </div>
            );
    }
    logSuccess(that,res){
        let history = this.props.history;
        setTimeout(()=>{
            history.push("/user_info");
        },1000);
        console.log("登录成功,1s后跳转");
        // 更新账号密码到redux
        let data = that.props.userdata;
        data.account = that.state.account;
        data.password = that.state.password;
        data.islogin = res.islogin;
        data.headsrc = res.headsrc;
        data.classgrade =res.class;
        data.username = res.username;
        const update = that.props.updateUserdata.login;
        update(data);
    }
}


//------------------------------react-redux------------------------------------
function mapStateToProps(state) {
    return{
        userdata:state.user_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userdataUpdate:bindActionCreators(userAction,dispatch)
    }
}
export default connect(mapStateToProps,
                        mapDispatchToProps)(UserLogin);