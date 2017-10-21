import React,{Component} from "react"
import "./style.less"
import ClassItem from "../classitem/classitem";

class ClassGroup extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let classes = [{title:"数学",url:require("../../static/image/icon/chinese.png")},{title:"英语",url:require("../../static/image/icon/chinese.png")},{title:"计算机",url:require("../../static/image/icon/chinese.png")},
            {title:"数学",url:require("../../static/image/icon/chinese.png")}];
        return(
            <div id="class-group">
                {classes.map((item,index)=>{
                    return(<ClassItem item={item} key ={index}/>);
                })}
            </div>
        );
    }
}

export default ClassGroup;