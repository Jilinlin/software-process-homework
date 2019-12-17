import React, { Component } from 'react'
import { NavBar, Icon ,Button, WhiteSpace} from 'antd-mobile';
import {Redirect} from 'react-router-dom'

import "./index.css"

export default class Setting extends Component {
    constructor(props){
        super(props);
        this.state={
            mine:false,
            user:false,
            password:false,
            back:false,
            huancun:"5.55"
        }
    }

    mine=(e)=>{
        e.preventDefault();
        this.setState({
            mine:true
        })
    }
    user=(e)=>{
        e.preventDefault();
        this.setState({
            user:true
        })
    }
    password=(e)=>{
        e.preventDefault();
        this.setState({
            password:true
        })
    }
    goback=(e)=>{
        e.preventDefault();
        let phone=localStorage.getItem('phonenumber');
        // console.log(phone);
        fetch('http://localhost:8000/quit', { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phone":phone})
        })
        .then((res) => res.text())
            .then((res) => {
                // console.log(res);
                if(res=="quit success"){
                    this.setState({
                        back:true
                    })
                    localStorage.removeItem('phonenumber');
                }else{
                    alert("退出失败");
                }
        })
    }
    clearhc=()=>{
        this.setState({
            huancun:"0"
        })
    }
    render() {
        if(this.state.mine){
            return <Redirect to={{pathname:"/shouye",state:{tab:"3"}}}/>
        }
        else if(this.state.user){
            return <Redirect to="/user" />
        }
        else if(this.state.password){
            return <Redirect to="/password" />
        }
        else if(this.state.back){
            return <Redirect to="/" />
        }
        return (
            <div style={{height:"812px",background:"#fff"}}>
                <div className="bigbox1">
                    <NavBar
                        mode="light"
                        icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                        onLeftClick={this.mine}
                        style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                    >
                    <span style={{fontSize:"22px"}}>设置</span>
                    </NavBar>

                    {/* 个人信息 */}
                    <div className="setbox">
                        <span className="set-word">个人信息</span>
                        <span className="set-arrow" onClick={this.user}>></span>
                    </div>
                    <hr/>
                    {/* 密码修改 */}
                    <div className="setbox">
                        <span className="set-word">密码修改</span>
                        <span className="set-arrow" onClick={this.password}>></span>
                    </div>
                    <hr/>
                    {/* 清除缓存 */}
                    <div className="setbox" onClick={this.clearhc}>
                        <span className="set-word">清除缓存</span>
                        <span className="set-arrow">{this.state.huancun}M</span>
                    </div>

                    {/* 退出登录 */}
                    <Button onClick={this.goback} className="set-button" type="warning">退出登录</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}
