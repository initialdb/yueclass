import React,{Component} from "react";
import Login from "../../components/login/login";
import "./style.less";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import *as userAction from "../../actions/user_action";
import {Route} from "react-router-dom"
import regInfo from "./reginfo/reginfo";

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
                    <Login  admin_type = "reg" userdata = {this.props.userdata} updateUserdata={this.props.userdataUpdate} link_title="过来登录"
                        doSuccess = {this.regSuccess.bind(this)}
                            link_url = "/user_login"
                    />
                </div>
            );
        }
    }

    regSuccess(){
        let history = this.props.history;
        //更新注册状态到redux
        let data = this.props.userdata;
        data.isregist = true;
        this.props.userdataUpdate.registting(data);
        setTimeout(()=>{
            //跳转到信息填写界面
            history.push("/user_reg/reg_info");
        },1000);
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