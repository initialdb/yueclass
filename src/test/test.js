import React,{Component} from "react"
import nProgress from "nprogress";


class Test extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                加载中
            </div>
        )
    }

    componentDidMount(){
        nProgress.start();
        setTimeout(function () {
            nProgress.done();
            console.log(111);
        },2000);
    }
}

export default Test;