import React,{Component} from "react"
import Header from "../../components/homeheader/header";
import ClassGroup from "../../components/classgroup/classgroup";
import *as courseAction from "../../actions/course_action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {post,get} from "../../fetch/post"


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
                    <div>
                        <Header/>
                        <ClassGroup data = {this.props.course.course} urlhead ="/group/"/>
                    </div>
        );
    }

    componentWillMount(){

    }

    componentDidMount(){
        // if (!this.props.userdata.islogin)
        //     this.props.history.push("/user_login");
        // else {
            //服务器请求数据
            let result = fetch(`http://localhost:3000/api/course/get_course?id=757072345`,{
                credentials: 'include'
            });
            result.then((res)=>{
                    return res.json();
                }
            ).then((json)=>{
                //解析课程
                let res = this.getCourse(json);
                console.log(res);
                //更新数据到redux
                let updateCourse = this.props.courseUpdate;
                updateCourse.updateCourse(res);
            });
        }
    // }

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
                url:require("../../static/image/icon/chinese.png"),
                teacher:"",
                course_id:""
            };
            course.title = data[i].course_name;
            course.teacher = data[i].teacher;
            course.id = data[i].course_id;
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