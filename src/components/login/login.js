import React,{Component} from "react"
import "./style.less"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            account:this.props.userdata.account,
            password:this.props.userdata.password
        };
    }

    render(){
        return(
            <div id="login">
                <form>
                    <div className="user">
                        <span>帐号:</span><input type="email" value={this.state.account}
                    onChange={this.handleAccountChange.bind(this)}/>
                        <div className="parting-line"></div>
                    </div>
                    <div className="password">
                        <span>密码:</span><input type="password" value={this.state.password}
                                               onChange={this.handlePasswordChange.bind(this)}/>
                        <div className="parting-line"></div>
                    </div>
                    <p className="reg-btn">过来注册</p>
                    <input className="submit-btn" type="submit" onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        );
    }

    componentDidMount(){
        //从服务器请求数据
    }

    //账号密码监听
    handleAccountChange(e){
        let val = e.target.value;
        this.setState({
                account:val
        });
    }

    handlePasswordChange(e){
        let val = e.target.value;
        this.setState({
            password:val
        });
    }

    //提交数据
    handleSubmit(){
        if(!(this.state.account||this.state.password)){
            alert("账号或密码为空");
        }else {
            let data = Object.assign({},this.props.userdata,
                {
                    account:this.state.account,             //账号密码设置
                    password:this.state.password,
                    issubmit:true                   //触发提交
                });
            //更新账号密码到redux
            const update = this.props.updateUserdata.login;
            update(data);
        }
    }

}

export default Login