import React,{Component} from "react"
import "./style.less"

class InputWindow extends Component{
    constructor(props){
        super(props);
        this.state = {value:""};
    }

    render(){
        return(
            <div id="input-window">
                <textarea type="text" placeholder="请夸赞/吐槽···" value={this.state.value} onChange={this.onchangeHandle.bind(this)}/>
            </div>
        );
    }

    //字符更新
   onchangeHandle(e){
        let val = e.target.value;
        this.setState({
            value:val
        });
        //更新数据到redux
        let strUpdate = this.props.strUpdate;
        let data = this.props.star_data;
        data.str = val;
        strUpdate(data);
   }
}

export default InputWindow;