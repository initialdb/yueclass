import React,{Component} from "react"
import Header from "../../components/header/header";
import InputWindow from "../../components/inputwindow/inputwindow";
import "./style.less"
import Grade from "../../components/Star/star";

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="comment">
                <Header classmates={"xxxx"}/>
                <InputWindow/>
                <Grade/>
                <div className="send_btn">
                    <button>发表</button>
                </div>
            </div>
        );
    }
}

export default Comment;