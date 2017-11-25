import React,{Component} from "react"
import "./style.less"

class regInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            classnum:"",
            call:""
        }
    }

    render(){
        return(
            <div id="reg-info">
                <form encType="multipart/form-data" method="post" name="reginfo" id="reginfo">
                    <ul>
                        <li className="header-upload">
                            <span>头像</span><input id="headerinput" type="file" accept="image/png,image/jpg" name="headerimg" onChange={this.loadImage.bind(this)}/>
                        </li>
                        <li><span>姓名</span><input type="text" value={this.state.username} name="username" onChange={this.handleChange.bind(this)}/></li>
                        <li><span>班级</span><input type="text" value={this.state.classnum} name="classnum" onChange={this.handleChange.bind(this)}/></li>
                        <li><span>电话</span><input type="text" value={this.state.call} name="call" onChange={this.handleChange.bind(this)}/></li>
                    </ul>
                </form>
                <button className="save-info" onClick={this.uploadInfo.bind(this)}>保存</button>
            </div>
        )
    }

    /**
     * 检查头像大小是否合适
     */
    loadImage(){
        let img = document.getElementById("headerinput");
        const imgfile = img.files[0];
        if (imgfile.size>1024*100) {
            alert("头像大于100k");
            img.value = null;
        }
    }

    /**
     * 文本变化
     */
    handleChange(e){
        let val = e.target.value;
        let type = e.target.name;
        switch (type){
            case "username":
                this.setState({
                   username:val
                });
                break;
            case "classnum":
                this.setState({
                    classnum:val
                });
                break;
            case "call":
                this.setState({
                    call:val
                });
                break;
        }
    }

    /**
     * 上传信息
     */
    uploadInfo(){
        if (this.state.classnum&&this.state.username&&this.state.call){
            if (window.FormData){
                let formdata = new FormData(document.getElementById("reginfo"));
                const oReq = new XMLHttpRequest();
                oReq.open("POST","http://123.207.242.39:3000/api/admin/regist/information/filling",true);
                oReq.onload = ()=>{
                    if (oReq.status===200){
                        console.log("上传成功");
                        //跳转到主页面
                        this.props.history.push("/");
                    }else{
                        console.log("上传失败")
                    }
                };
                oReq.send(formdata);
            }else {
                alert("浏览器不支持");
            }
        }else {
            alert("信息填写不完全");
        }

    }


}

export default regInfo;