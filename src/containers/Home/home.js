import React,{Component} from "react"
import Header from "../../components/homeheader/header";
import ClassGroup from "../../components/classgroup/classgroup";
import *as courseAction from "../../actions/course_action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {post,get} from "../../fetch/post"
import nProgress from "nprogress"

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            this.props.userdata.islogin?
                    <div>
                        <Header/>
                        <ClassGroup data = {this.props.course.course} urlhead ="/group/"/>
                    </div>:
                <div>
                    请先登录
                </div>
        );
    }

    componentWillMount(){

    }

    componentDidMount(){
        if (!this.props.userdata.islogin)
            this.props.history.push("/user_login");
        else {
            //服务器请求数据
            let result = fetch(`http://123.207.242.39:3000/api/course/get_course?id=${this.props.userdata.account}`,{
                credentials: 'include'
            });
            nProgress.start();
            result.then((res)=>{
                    nProgress.done();
                    return res.json();
                }
            ).then((json)=>{
                //解析课程
                let res = this.getCourse(json);
                //更新数据到redux
                let updateCourse = this.props.courseUpdate;
                updateCourse.updateCourse(res);
            });
        }
    }

    /**
     * 课程解析
     * @param data
     */
    getCourse(data){
        //课程
        let res = {
            count:0,
            course:[]
        };
        for (let i=0;i<data.length;i++){
            let course = {
                title:"",
                url:"",
                teacher:"",
                course_id:""
            };
            course.title = data[i].course_name;
            course.teacher = data[i].teacher;
            course.id = data[i].course_id;
            course.iconsrc = "http://123.207.242.39:3000/api/courseicon/"+data[i].iconsrc;
            res.course[i]=course;
        }
        res.count = data.length;
        return res;
    }
}


//------------------------------react-redux------------------------------------
function mapStateToProps(state) {
    return{
        course:state.course_reducer,
        userdata:state.user_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        courseUpdate:bindActionCreators(courseAction,dispatch)
    }
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Home);