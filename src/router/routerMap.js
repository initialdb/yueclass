import React,{Component} from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from "../App";
import ClassComment from "../containers/Group/group";
import Home from "../containers/Home/home";

class RouterMap extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path = "/" component={App}/>
                    <Route path="/comment" component={ClassComment}/>
                </div>
            </Router>
        )
    }
}

export default RouterMap;