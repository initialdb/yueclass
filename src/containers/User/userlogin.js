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
                            link_url = "/user_reg"
                    />
                </div>
            );
    }
    logSuccess(that,res){
        let history = this.props.history;
            const params = this.props.match.params.router;
            if (params) {
                history.push("/" + params);
            }
            else
                history.push("/");
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
        //存储密码到localStorage
        localStorage.setItem("userdata",JSON.stringify({
            account:data.account,
            password:data.password
        }));
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