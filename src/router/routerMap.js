import React,{Component} from "react";
 import {Router,Route} from "react-router";
import App from "../App";

class RouterMap extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <Router>
                <Route path = "/" component={App}/>
            </Router>
            </div>
        )
    }
}

export default RouterMap;