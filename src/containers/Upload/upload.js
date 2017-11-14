import React,{Component} from "react";
import "./style.less"
import FileUpLoad from "../../components/fileupload/fileupload";

class UpLoadPage extends Component{
    constructor(props){
        super(props);
        this.subjects=[
            {
            title:"数学",
            course_id:"3000000"
             },
            {title:"语文",
             course_id:"30000001"
            }
         ]
    }

    render(){
        return(
            <div>
                <FileUpLoad subjects={this.subjects}/>
            </div>
        );
    }
}

export default UpLoadPage;