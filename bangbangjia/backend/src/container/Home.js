import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import {Redirect} from "react-router-dom"
import "./Home.css"
import Search from 'antd/lib/input/Search';

export default class Home extends Component { 
    constructor(props){
        super(props);
        this.state={
            fabu:false
        }
    }
    fabu=(e)=>{
        e.preventDefault();
        this.setState({
            fabu:true
        })
    }
    
    render() {
        if(this.state.fabu){
            return <Redirect to="/appback/gonggao/fabuNotice" />
        }
        return (
            <div>
                {/* 首页上部分为一个大盒子 */}
                <div className="home-top">
                    <p className="home-word">用户整体情况</p>

                    <div className="top-box">
                        <i style={{fontWeight:"bold"}} className="iconfont icon-zhexiantu"></i>
                        <span className="home-word1">新增人数</span>
                        <p className="home-word2">2</p>
                    </div>

                    <div className="top-box" style={{marginLeft:"30%"}}>
                        <i style={{fontSize:"13px"}} className="iconfont icon-user"></i>
                        <span className="home-word1">总用户数</span>
                        <p className="home-word2">10</p>
                    </div>
                </div>

                {/* 首页下半部分 */}
                <div className="home-bottom">
                    <p className="home-word">已群发消息</p>
                    <Search className="home-search" placeholder="搜索关键字" />
                    <div className="new-box">
                        <img className="new-img" src={[require("../img/new1.jpg")]} alt=""/>
                        <p className="new-word">
                            10月6日
                            <br/>
                            【公告】 关于加强小区生活垃圾分类管理的通知...
                        </p>
                    </div>
                    <div className="new-box">
                        <img className="new-img" src={[require("../img/new1.jpg")]} alt=""/>
                        <p className="new-word">
                            10月3日
                            <br/>
                            【公告】 关于小区路灯维修时间的通知...
                        </p>
                    </div>
                    <Button onClick={this.fabu} className="new-btn" type="primary" inline size="small">新建群发</Button>
                </div>
            </div>
        )
    }
}
