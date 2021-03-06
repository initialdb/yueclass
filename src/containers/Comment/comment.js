import React,{Component} from "react"
import Header from "../../components/header/header";
import InputWindow from "../../components/inputwindow/inputwindow";
import "./style.less"
import Star from "../../components/Star/star";
import * as commentAction from "../../actions/comment_action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {post} from "../../fetch/post"
import nProgress from "nprogress"

class Comment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.islogin?
            <div id="comment">
                <Header classmates={"zxxx"} linkurl={"/group/"+this.props.match.params.course_id}/>
                <InputWindow strUpdate={this.props.commentUpdate.updateCommentStr.bind(this)} star_data={this.props.star}/>
                <Star star_data={this.props.star} starUpdate={this.props.commentUpdate.updateCommentStar.bind(this)}  />
                <div className="send_btn">
                    <button onClick={this.sendHandler.bind(this)}>发表</button>
                </div>
            </div>:
                <div>
                    <div>
                        请先登录
                    </div>
                </div>
        );
    }

    sendHandler(){
        //上传数据到服务器
        const data = this.props.star;
       if (data.count===0||data.str==""){
           alert("评论或评分不能为空");
       }else {
           nProgress.start();
           let result = post("http://123.207.242.39:3000/api/course/upload_comment/",data);
           result.then((res)=>{
               nProgress.done();
               return res.json();
           }).then((json)=>{
               if (json.successed){
                  alert("上传成功");
                   this.props.history.push("/group/"+this.props.match.params.course_id);
               }else {
                   alert("上传失败");
               }
           });
       }
    }

    componentDidMount() {
        //先登录
        if (this.props.islogin === false)
            this.props.history.push("/user_login/");
        else {
            //更新要评论的这个人的账号数据到redux
            const updatetoRedux = this.props.commentUpdate.updateCommentStar;
            let data = this.props.star;     //获取评论数据
            let group = this.props.group;   //获取分组数据
            const id = this.props.match.params.id;     //要评论的人的id
            const course_id = group.course_id;       //课程号
            //检测一下这个id是否在小组中
            for (let i = 0; i < group.classmates.length; i++) {
                if (id === group.classmates[i].id) {
                    data.id = id;
                    data.course_id = course_id;
                    updatetoRedux(data);
                    break;
                }
            }
        }
    }
}


//------------------------------react-redux------------------------------------
function mapStateToProps(state) {
    return{
        star:state.comment_reducer,        //评论数据
        group:state.crew_reducer,        //分组数据
        islogin:state.user_reducer.islogin  //登录flag
    }
}

function mapDispatchToProps(dispatch) {
    return{
        commentUpdate:bindActionCreators(commentAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);