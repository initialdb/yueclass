import React,{Component} from "react"
import ClassGroup from "../../components/classgroup/classgroup";
import Header from "../../components/header/header";
import Comment from "../Comment/comment";



class Group extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                {/*<Header classmates ={6}/>*/}
              {/*<ClassGroup classmate = {6}/>*/}
              <Comment/>
            </div>
        );
    }
}

export default Group;