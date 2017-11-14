import React,{Component} from "react"
import {connect} from "react-redux"
import UserHeader from "../../components/userheader/userheader";
import FunctionList from "../../components/functionlist/functionlist";

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
                <UserHeader username ={this.props.userdata.username} classgrade={this.props.userdata.classgrade} account={this.props.userdata.account}/>
                <FunctionList/>
            </div> :
                <div>
                    {this.props.history.push("/user_login")}
                </div>
        );
    }

    componentDidMount(){
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

    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(UserInfo);