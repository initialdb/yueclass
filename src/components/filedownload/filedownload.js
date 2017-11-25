import React,{Component} from "react"
import "./style.less"
class FileDownload extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="file-download">
                <div className="div-line"></div>
                <header>
                    作业
                </header>
                {this.props.files.map((item,index)=>{
                    item.herfurl = "http://123.207.242.39:3000/api/course/download/homework/"+item.course_id+"?src="+item.src;
                    return(
                        <div key={index}>
                            <a href={item.herfurl}>
                                <li className="file-li">
                                    {item.title}
                                </li>
                            </a>
                            <div className="div-line"></div>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default FileDownload;