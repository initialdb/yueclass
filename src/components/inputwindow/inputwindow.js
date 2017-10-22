import React,{Component} from "react"
import "./style.less"

class InputWindow extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="input-window">
                <textarea type="text" placeholder="请夸赞/吐槽···"/>
            </div>
        );
    }
}

export default InputWindow;