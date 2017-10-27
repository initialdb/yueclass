import React,{Component} from "react"
import Header from "../../components/homeheader/header";
import ClassGroup from "../../components/classgroup/classgroup";
import *as courseAction from "../../actions/course_action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import User from "../User/user";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.classes = [{title:"数学",url:require("../../static/image/icon/chinese.png")},{title:"英语",url:require("../../static/image/icon/chinese.png")},{title:"计算机",url:require("../../static/image/icon/chinese.png")},
            {title:"数学",url:require("../../static/image/icon/chinese.png")}];
    }

    render(){
        return(
            <div>
                {/*<Header/>*/}
                {/*<ClassGroup data = {this.props.course.course}/>*/}
                <User/>
            </div>
        );
    }

    componentDidMount(){
        //从服务器请求数据
        let res = {
            count:0,
            course :[{title:"数学",url:require("../../static/image/icon/chinese.png")},{title:"英语",url:require("../../static/image/icon/chinese.png")},{title:"计算机",url:require("../../static/image/icon/chinese.png")},
                {title:"数学",url:require("../../static/image/icon/chinese.png")}],
        };
        //更新数据到redux
        let updateCourse = this.props.courseUpdate;
        updateCourse.updateCourse(res);
    }
}


//------------------------------react-redux------------------------------------
function mapStateToProps(state) {
    return{
        course:state.course_reducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        courseUpdate:bindActionCreators(courseAction,dispatch)
    }
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(Home);