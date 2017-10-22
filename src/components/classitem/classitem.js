import React,{Component} from "react"
import "./style.less"
import {Link} from "react-router-dom"

class ClassItem extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Link to="/comment">
                <div className="class-item">
                    <img src={this.props.item.url} alt="图挂了"/>
                    <p>{this.props.item.title}</p>
                </div>
            </Link>
        );
    }
}

export default ClassItem;