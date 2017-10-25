import React,{Component} from "react"
import "./style.less"

class Star extends Component{
    constructor(props){
        super(props);
        this.li_className=["off","off","off","off","off"];      //设置li的classname
        this.state={
            count:this.props.star_data.count
        }
    }

    render(){
        this.starHandle(this.props.star_data.count);
        return(
            <div id="grade">
                <ul>
                    <li className="comment-title">你的评价:</li>
                    <li id="star1" className={this.li_className[0]} onClick={this.clickHandle.bind(this)}></li>
                    <li id="star2" className={this.li_className[1]} onClick={this.clickHandle.bind(this)}></li>
                    <li id="star3" className={this.li_className[2]} onClick={this.clickHandle.bind(this)}></li>
                    <li id="star4" className={this.li_className[3]} onClick={this.clickHandle.bind(this)}></li>
                    <li id="star5" className={this.li_className[4]} onClick={this.clickHandle.bind(this)}></li>
                </ul>
            </div>
        );
    }

    //点亮星星
    starHandle(star){
        if (star>5) {
            star = star % 5;
        }
        for (let i=0;i<star;i++){
            this.li_className[i] = "on";
        }
        for (let i=star;i<5;i++){
            this.li_className[i] = "off";
        }
    }

    //点击事件
    clickHandle(e){
        //确认是否有修改权限
        if(this.props.star_data.modify) {
            e.preventDefault();
            let count = parseInt(e.target.id.substring(4,5));
            //将star个数更新到redux
            let newData =Object.assign({},this.props.star_data,{count:count});
            let starUpdate = this.props.starUpdate;         //通过dispatch更新
            starUpdate(newData);
        }
    }
}

export default Star;