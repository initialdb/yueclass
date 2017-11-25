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
import regInfo from "../containers/User/reginfo/reginfo"
import Test from "../test/test"


class RouterMap extends Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path = "/" component={App}/>
                    <Route exact path="/group/:course_id/" component={Group}/>
                    <Route path="/user_login/:router?" component={UserLogin}/>
                    <Route exact path="/user_reg" component={UserReg}/>
                    <Route path="/user_info" component={UserInfo}/>
                    <Route path="/comment/:course_id/:id" component={Comment}/>
                    <Route path="/upload" component={UpLoadPage}/>
                    <Route path="/get/upload/result" component={UpLoadRes}/>
                    <Route path="/user_reg/reg_info" component={regInfo}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap;