import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon, Grid} from 'antd-mobile';
import './Jiaofei.css'

// 宫格
const array=[
    {className:'iconfont icon-shandian',text:"电费"},
    {className:'iconfont icon-icon-humidity',text:"水费"},
    {className:'iconfont icon-gongnuan',text:"供暖费"},
    {className:'iconfont icon-huo',text:"燃气费"}];
const data = array.map((item) => ({
    icon:item.className,
    text: item.text,
  }));


export default class Jiaofei extends React.Component {
    constructor(props){
        super(props);
        this.state={
            home:false,
            dianfei:false,
            shuifei:false,
            gongnuan:false,
            ranqi:false
        }
    }
    // 回到首页
    handleClick=()=>{
        this.setState({
            home :true
        })
    }
    // 打开详情
    changeClick=(text)=>{
        if(text=="电费"){
            this.setState({
                dianfei :true
            })
        }else if(text=="水费"){
            this.setState({
                shuifei :true
            })
        }else if(text=="供暖费"){
            this.setState({
                gongnuan :true
            })
        }else if(text=="燃气费"){
            this.setState({
                ranqi :true
            })
        }
    }
    render(){
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }else if(this.state.dianfei){
            return  <Redirect to="/dianfei"/>
        }else if(this.state.shuifei){
            return  <Redirect to="/shuifei"/>
        }else if(this.state.gongnuan){
            return  <Redirect to="/gongnuan"/>
        }else if(this.state.ranqi){
            return  <Redirect to="/ranqi"/>
        }
        return(
            <div style={{height:"812px",background:"#F4F3F3"}}>
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>生活缴费</span>
                </NavBar>

                <div style={{background:"white"}} className="smalltab">
                    xxx小区
                </div>

                {/* 宫格 */}
                <div>
                    <Grid data={data}
                        columnNum={2}
                        hasLine={true}
                        renderItem={dataItem => (
                            <div onClick={()=>{this.changeClick(dataItem.text)}} style={{paddingTop:"25px"}}>
                                <i style={{fontSize:55}} className={dataItem.icon}></i>
                                <div style={{ color: '#919090', fontSize: '25px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
