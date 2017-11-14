import React,{Component} from "react"
import "./style.less"
import {Link} from "react-router-dom"

class UserHeader extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="user-header">
                <div className="go-back">
                    <Link to="/"><img src ={require("../../static/image/goback.png")}/></Link>
                </div>
                <div className="header-portrait">
                    <img src={require("../../static/image/headportrait.jpg")}/>
                </div>
                <div className="user-info">
                    <p className="user-name">{this.props.username}</p>
                    <p>{this.props.classgrade}</p>
                    <p>{this.props.account}</p>
                </div>
                <div className="divide-line"></div>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default UserHeader;