import React,{Component} from "react";
import "./style.less"
import FileUpLoad from "../../components/fileupload/fileupload";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import FileDownload from "../../components/filedownload/filedownload";
import {post} from "../../fetch/post"
import *as workAction from "../../actions/work_action"
import nProgress from "nprogress"

class UpLoadPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.userdata.islogin?
            <div>
                <FileUpLoad subjects={this.props.course.course}/>
                <FileDownload files = {this.props.course_work.files} />
            </div>:
                <div>
                    请先登录
                </div>
        );
    }

    componentDidMount(){
        if (!this.props.userdata.islogin)
            this.props.history.push("/user_login");
        else {
            //请求作业数据
            const result = post("http://123.207.242.39:3000/api/course/download/homework", {
                course_ids: [30000000, 30000001]
            });
            nProgress.start();      //启动进度条
            result.then((res) => {
                nProgress.done();       //进度条关闭
                return res.json();
            }).then((json) => {
                let workdata = this.props.course_work;
                workdata.files = [];
                //解析下载的课程
                for (let i = 0; i < json.length; i++) {
                    const data = {
                        title: json[i].title,      //作业名字
                        src: json[i].src,            //资源
                        course_id: json[i].courseid  //课程号
                    };
                    workdata.files.push(data);
                }
                //上传到redux中的作业数据中
                this.props.updateWork.courseWork(workdata);
                //强行渲染一波
                this.setState({});
            });
        }
    }
}

//----------------------react-redux------------------------
function mapStateToProps(state) {
    return{
        course:state.course_reducer,         //课程数据
        course_work:state.coursework_reducer,  //作业数据
        userdata:state.user_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        updateWork:bindActionCreators(workAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpLoadPage);