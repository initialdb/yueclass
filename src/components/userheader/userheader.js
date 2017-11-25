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
                    <img src={"http://123.207.242.39:3000/api/header/"+this.props.headsrc}/>
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