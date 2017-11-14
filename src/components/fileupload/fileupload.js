import React,{Component} from "react"
import "./style.less"

class FileUpLoad extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="upload-file">
                <form action="http://localhost:3000/api/course/homework" id="form-upload" method="POST" encType="multipart/form-data">
                    <span>科目：</span><input list="subject" name="sub_value"/>
                    <datalist id="subject">
                        {this.props.subjects.map((item,index)=>{
                          return(
                              <option value={item.course_id} key={index}>{item.title}</option>
                          )
                        })}
                    </datalist>
                    <span>上传文件：</span><input type="file" name="homework"/>
                    <input className="submit_btn" type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}

export default FileUpLoad;
