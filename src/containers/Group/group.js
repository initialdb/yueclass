import React,{Component} from "react"
import ClassGroup from "../../components/classgroup/classgroup";
import Header from "../../components/header/header";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as crewAction from "../../actions/crew_action"
import nProgress from "nprogress"


class Group extends Component{
    constructor(props){
        super(props);
        this.state = {};
        //先清空redux中的其他科目的分组信息
        this.props.updateCrew.updateCrew({});
    }

    render(){
        return(
            this.props.islogin?
            <div>
                <Header classmates ={this.props.data.count}  linkurl="/"/>
                <ClassGroup data = {this.props.data.classmates} urlhead ={"/comment/"+this.props.match.params.course_id+"/"}/>
            </div>:
                <div>
                    请先登录
                </div>
        );
    }

    componentDidMount(){
        //先登录
        if (this.props.islogin===false)
            this.props.history.push("/user_login");
        else {
            //从服务器请求数据
            nProgress.start();
            let result = fetch("http://123.207.242.39:3000/api/course/get_course/get_group?courseid="+this.props.match.params.course_id, {
                credentials: 'include'
            });
            result.then((res) => {
                nProgress.done();
                return res.json();
            }).then((json) => {
                //解析获取到的数据
                let res = this.getGroupMember(json);
                //更新数据到redux
                let updateCrew = this.props.updateCrew;
                updateCrew.updateCrew(res);
            });
        }
    }

    getGroupMember(data){
        let res = {
            count:0,
            course_id:"",
            classmates:[]
        };
        for (let i=0;i<data.length;i++){
            res.classmates[i] = {
                title: data[i].username,
                iconsrc:"http://123.207.242.39:3000/api/header/"+data[i].headsrc,
                id:data[i].account
            };
        }
        res.course_id = this.props.match.params.course_id;
        res.count = data.length;
        return res;
    }
}

//-----------------------------react-redux---------------------
function mapStateToProps(state) {
    return{
        data:state.crew_reducer,
        islogin:state.user_reducer.islogin
    }
}

function mapDispatchToProps(dispatch) {
    return{
        updateCrew:bindActionCreators(crewAction,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Group)