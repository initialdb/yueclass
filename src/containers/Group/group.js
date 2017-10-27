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
                <Header classmates ={this.props.data.count}/>
              <ClassGroup data = {this.props.data.classmates}/>
            </div>
        );
    }

    componentDidMount(){
        //从服务器请求数据
        let res = {
            count:0,
            classmates :[{title:"数学",url:require("../../static/image/icon/chinese.png")},{title:"英语",url:require("../../static/image/icon/chinese.png")},{title:"计算机",url:require("../../static/image/icon/chinese.png")},
                {title:"数学",url:require("../../static/image/icon/chinese.png")}],
        };
        //更新数据到redux
        let updateCrew = this.props.updateCrew;
        updateCrew.updateCrew(res);
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