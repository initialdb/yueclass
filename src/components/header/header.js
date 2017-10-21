import React,{Component} from "react"
import "./style.less"


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="header">
                <p>插件</p>
                <div className="scan-code" onClick={this.handleScanCode}></div>
                <div className="search-class" onClick={this.handleSearch}></div>
            </div>
        );
    }

    handleScanCode(){
        alert("敬请期待");
    }

    handleSearch(){
        alert("敬请期待");
    }
}

export default Header;