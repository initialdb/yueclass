import React,{Component} from "react"
import "./style.less"
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import *as initAction from "../../actions/init_action"

class FunctionList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="function-list">
                <ul>
                    <li><img src={require("../../static/image/icon/notice.png")}/><span>通知</span></li>
                    <li><img src={require("../../static/image/icon/grade.png")}/><span>成绩</span></li>
                    <li><img src={require("../../static/image/icon/setting.png")}/><span>设置</span></li>
                    <li onClick={this.logOut.bind(this)}><img src={require("../../static/image/icon/callus.png")}/><span>注销</span></li>
                </ul>
            </div>
        );
    }

    componentDidMount(){

    }

    /**
     * 注销按钮
     */
    logOut(){
        //重置redux中的登录状态信息
        this.props.initUpdate.initRedux();
        //删除localStorage中的账号信息
        localStorage.removeItem("userdata");
        this.props.history.push("/user_login");
    }
}

export default FunctionList;