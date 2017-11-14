import React,{Component} from "react"
import "./style.less"

class FunctionList extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="function-list">
                <ul>
                    <li><img src={require("../../static/image/icon/notice.png")}/><span>通知</span></li>
                    <li><img src={require("../../static/image/icon/grade.png")}/><span>成绩</span></li>
                    <li><img src={require("../../static/image/icon/setting.png")}/><span>设置</span></li>
                    <li><img src={require("../../static/image/icon/callus.png")}/><span>反馈</span></li>
                </ul>
            </div>
        );
    }

    componentDidMount(){

    }
}

export default FunctionList;