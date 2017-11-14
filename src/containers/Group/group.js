import React,{Component} from "react"
import ClassGroup from "../../components/classgroup/classgroup";
import Header from "../../components/header/header";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as crewAction from "../../actions/crew_action"



class Group extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <Header classmates ={this.props.data.count}  linkurl="/"/>
                <ClassGroup data = {this.props.data.classmates} urlhead ={"/comment/"+this.props.match.params.course_id+"/"}/>
            </div>
        );
    }

    componentDidMount(){
        console.log(this.props.match.params.course_id);
        //从服务器请求数据
        let result = fetch("http://localhost:3000/api/course/get_course/get_group?courseid=30000000",{
            credentials: 'include'
        });
        result.then((res)=>{
            return res.json();
        }).then((json)=>{
            console.log(json);
            //解析获取到的数据
            let res = this.getGroupMember(json);
            console.log(res);
            //更新数据到redux
            let updateCrew = this.props.updateCrew;
            updateCrew.updateCrew(res);
        });
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
                url: require("../../static/image/icon/chinese.png"),
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
        data:state.crew_reducer
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