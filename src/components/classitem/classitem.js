import React,{Component} from "react"
import "./style.less"

class ClassItem extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="class-item">
                <img src={this.props.item.url} alt="图挂了"/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default ClassItem;