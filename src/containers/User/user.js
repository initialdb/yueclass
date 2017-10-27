import React,{Component} from "react";
import Login from "../../components/login/login";
import "./style.less";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import *as userAction from "../../actions/user_action";

class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.userdata.issubmit) {
            this.sendUserData();
            return (
                <div>
                    登陆中
                </div>
            );
        }else {
            return(
                <div id="user">
                    <p className="login-title">邮箱/手机登录</p>
                    <Login userdata = {this.props.userdata} updateUserdata={this.props.userdataUpdate}/>
                </div>
            );
        }
    }

    componentDidMount(){
        //从服务器请求数据

    }

    //登录
    sendUserData(){
        const account = this.props.userdata.account;
        const password = this.props.userdata.password;
    }

    //登录成功
    logsuccess(){
        let userdata = this.props.userdata;
        userdata = Object.assign({}, userdata, {islogin: true, issubmit: false});
        const update = this.props.userdataUpdate.login;
        update(userdata)
    };

    //登陆失败
    logfail(){
        let userdata = this.props.userdata;
        userdata = Object.assign({}, userdata, {issubmit: false});
        const update = this.props.userdataUpdate.login;
        update(userdata)
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
                        mapDispatchToProps)(User);