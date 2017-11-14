import React,{Component} from "react";
import Login from "../../components/login/login";
import "./style.less";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import *as userAction from "../../actions/user_action";

class Regist extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.userdata.issubmit) {
            this.sendUserData();
            return (
                <div>
                    注册中
                </div>
            );
        }else {
            return(
                <div id="user">
                    <p className="login-title">邮箱/手机注册</p>
                    <Login  admin_type = {"reg"} userdata = {this.props.userdata} updateUserdata={this.props.userdataUpdate} link_title="过来登录"
                        doSuccess = {this.regSuccess.bind(this)}
                    />
                </div>
            );
        }
    }

    regSuccess(){
        let history = this.props.history;
        setTimeout(()=>{
            history.push("/user_login");
        },1000);
        console.log("注册成功,1s后跳转");
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
    mapDispatchToProps)(Regist);