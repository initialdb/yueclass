import React,{Component} from "react"
import "./style.less"
import ClassItem from "../classitem/classitem";

class ClassGroup extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let data = this.props.data;
        return(
            <div id="class-group">
                {
                    data?
                    data.map((item,index)=>{
                    return(<ClassItem item={item} key ={index} url={this.props.urlhead+item.id}/>);
                }):""
                }
            </div>
        );
    }
}

export default ClassGroup;