import React,{Component} from "react"
import Header from "../../components/homeheader/header";
import ClassGroup from "../../components/classgroup/classgroup";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <Header/>
                <ClassGroup/>
            </div>
        );
    }
}

export default Home;