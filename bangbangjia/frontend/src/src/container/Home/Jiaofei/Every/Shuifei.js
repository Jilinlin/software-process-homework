import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'



export default class Shuifei extends React.Component {
    constructor(props){
        super(props);
        this.state={
            jiaofei:false,
            next:false
        }
    }
    // 回到生活缴费
    handleClick=()=>{
        this.setState({
            jiaofei:true
        })
    }
    // 到下一步
    doNext=()=>{
        this.setState({
            next:true
        })
    }
    render(){
        if(this.state.jiaofei){
            return  <Redirect to="/jiaofei"/>
        }else if(this.state.next){
            let danwei=document.querySelector("input[name=danwei]").value;
            let huhao=document.querySelector("input[name=huhao]").value;
            // console.log(danwei,huhao);
            return <Redirect to={{pathname:"/shuinext",state:{danwei:danwei,huhao:huhao}}}/>
        }
        return(
            <div style={{height:"812px",background:"#F4F3F3"}}>
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>新增缴费账户</span>
                </NavBar>

                <div style={{background:"white"}} className="dianfeititle">
                    <div className="dianicon">
                        <i style={{fontSize:35,color:"white"}} className='iconfont icon-icon-humidity-copy'></i>
                    </div>
                    <span className="dianfeispan">水费</span>
                    <span className="dingweispan">石家庄市<i style={{fontSize:20,color:"#333333"}} className='iconfont icon-weizhi'></i></span>
                </div>

                {/* 提交表单 */}
                <form onSubmit={this.doNext} style={{background:"white"}} className="dianfeibody">
                    <div className="dianfeitop">
                        <span className="bodyspan">缴费单位</span>
                        <input className="bodyinput" list="bodyinput" name="danwei" autoFocus/>
                            <datalist id="bodyinput">
                                <option value="xx供电公司"/>
                                <option value="xx供水公司"/>
                                <option value="xx供暖公司"/>
                                <option value="xx燃气公司"/>
                            </datalist>
                    </div>
                    <div className="dianfeibottom">
                        <span className="bodyspan">户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</span>
                        <input className="bodyinput" type="text" name="huhao"/>
                    </div>
                    <div className="button">
                        <input type="submit" value="下一步" className="thebutton"/>
                    </div>
                </form>       
            </div>
        )
    }
}
