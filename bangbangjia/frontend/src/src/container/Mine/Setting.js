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
            password:false
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
    render() {
        if(this.state.mine){
            return <Redirect to="/" />
        }
        else if(this.state.user){
            return <Redirect to="/user" />
        }
        else if(this.state.password){
            return <Redirect to="/password" />
        }
        return (
            <div>
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
                    <div className="setbox">
                        <span className="set-word">清除缓存</span>
                        <span className="set-arrow">5.55M</span>
                    </div>

                    {/* 退出登录 */}
                    <Button onClick={this.mine} className="set-button" type="warning">退出登录</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}
