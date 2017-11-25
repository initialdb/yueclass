import React,{Component} from "react"
import {connect} from "react-redux"
import UserHeader from "../../components/userheader/userheader";
import FunctionList from "../../components/functionlist/functionlist";
import {bindActionCreators} from "redux";
import *as initAction from "../../actions/init_action"

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            //是否登录
            this.props.userdata.islogin?
            <div>
                <UserHeader username ={this.props.userdata.username} classgrade={this.props.userdata.classgrade} account={this.props.userdata.account}
                    headsrc = {this.props.userdata.headsrc}
                />
                <FunctionList history={this.props.history} initUpdate = {this.props.initUpdate}/>
            </div> :
                <div>
                  请先登录
                </div>
        );
    }

    componentDidMount(){
        //先登录
        if (this.props.userdata.islogin===false)
            this.props.history.push("/user_login");
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
        initUpdate:bindActionCreators(initAction,dispatch)
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(UserInfo);