import React,{Component} from "react"
import "./style.less"
import {Link} from "react-router-dom"

class HomeHeader extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="home-header">
                <p>插件</p>
                <Link to="/user_info"><div className="scan-code" ></div></Link>
                <Link to="/upload"><div className="search-class"></div></Link>
            </div>
        );
    }


    handleSearch(){
        alert("敬请期待");
    }
}

export default HomeHeader;