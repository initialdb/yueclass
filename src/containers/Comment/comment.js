import React,{Component} from "react"
import Header from "../../components/header/header";
import InputWindow from "../../components/inputwindow/inputwindow";
import "./style.less"
import Star from "../../components/Star/star";
import * as commentAction from "../../actions/action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class Comment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="comment">
                <Header classmates={"xxxx"}/>
                <InputWindow strUpdate={this.props.commentUpdate.updateCommentStr.bind(this)}/>
                <Star star_data={this.props.star} starUpdate={this.props.commentUpdate.updateCommentStar.bind(this)}  />
                <div className="send_btn">
                    <button>发表</button>
                </div>
            </div>
        );
    }
}


//------------------------------react-redux------------------------------------
function mapStateToProps(state) {
    return{
        star:state.comment_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        commentUpdate:bindActionCreators(commentAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);