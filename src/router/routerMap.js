import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import App from "../App";

import UserLogin from "../containers/User/userlogin"
import UserReg from "../containers/User/reg"
import UserInfo from "../containers/UserInfo/userinfo"
import Group from "../containers/Group/group"
import Comment from "../containers/Comment/comment"
import UpLoadPage from "../containers/Upload/upload"
import UpLoadRes from "../containers/UploadResult/uploadres"


class RouterMap extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path = "/" component={App}/>
                    <Route path="/group/:course_id/" component={Group}/>
                    <Route path="/user_login" component={UserLogin}/>
                    <Route path="/user_reg" component={UserReg}/>
                    <Route path="/user_info" component={UserInfo}/>
                    <Route path="/comment/:course_id/:id" component={Comment}/>
                    <Route path="/upload" component={UpLoadPage}/>
                    <Route path="/get/upload/result" component={UpLoadRes}/>
                </div>
            </Router>
        )
    }
}

export default RouterMap;