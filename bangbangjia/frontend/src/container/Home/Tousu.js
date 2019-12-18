import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Tousu extends Component {
    constructor(props){
        super(props);
        this.state={
            home:false,
            jianyi:false,
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/tousu')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({data:res});
        })
    }
    // 回到首页
    handleClick=()=>{
        this.setState({
            home:true
        })
    }
    doNext=()=>{
        this.setState({
            jianyi:true
        })
    }
    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }
        if(this.state.jianyi){
            return  <Redirect to="/jianyi"/>
        }
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 投诉建议标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>投诉建议</span>
                </NavBar>

                {/* 投诉建议内容 */}
                <List className="my-list">
                <ul>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx} style={{borderBottom:"1.5px solid #ab1602"}}>
                                    <Item multipleLine onClick={() => {}}>
                                        <span style={{fontSize:22,fontWeight:'bold'}}> {item.uname} </span>
                                        <Brief style={{marginTop:'3%',fontSize:17}}> {item.fcontent}</Brief>
                                        <Brief style={{marginTop:'3%',float:"right",fontSize:15}}> {item.fdate}</Brief>
                                    </Item>
                                </li>
                            })}
                </ul>
                </List>   
                {/* 添加投诉信息内容 */}
                {/* <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",lineHeight:"60px",width:'100%',position:'fixed',bottom:'0'}}
                    // ,position:'fixed',bottom:'0'
                > */}
                    <i onClick={()=>{this.doNext()}} style={{fontSize:50,color:'#ab1602',marginLeft:"43%"}} className='iconfont icon-jiahao'></i>
                {/* </NavBar>              */}
            </div>
        )
    }
}
