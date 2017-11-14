import React,{Component} from "react"
import "./style.less"
import {Link} from "react-router-dom"

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="header">
                <Link to={this.props.linkurl}><img src={require("../../static/image/icon/back_icon.png")}/>
                </Link>
                <span>我的队友({this.props.classmates})</span>
            </div>
        );
    }
}

export default Header;