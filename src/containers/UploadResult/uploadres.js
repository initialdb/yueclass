import React,{Component} from "react"

class UpLoadRes extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div id="upload-res">
                上传成功
                1s后自动跳转
            </div>
        );
    }

    componentDidMount(){
        const that = this;
        setTimeout(()=>{
            that.props.history.push("/");
        },1000)
    }

}

export default UpLoadRes;