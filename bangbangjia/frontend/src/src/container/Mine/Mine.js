import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { NavBar} from 'antd-mobile';

import "./index.css"

export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            payment:false,
            setting:false
        }
    }

    payment=(e)=>{
        e.preventDefault();
        this.setState({
            payment:true,
        })
    }
    setting=(e)=>{
        e.preventDefault();
        this.setState({
            setting:true,
        })
    }

    render() {
        if(this.state.payment){
            return <Redirect to="/payment1" />
        }
        else if(this.state.setting){
            return <Redirect to="/setting" />
        }


        return (
            <div>
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>我的</span>
                </NavBar>

                <div className="box">
                    {/* 用户名片 */}
                    <div className="card">
                        <p style={{fontSize:"20px",fontWeight:"bold"}}>韩梅梅</p>
                        <p><span style={{fontWeight:"bold"}}>电话:</span>15232170109</p>
                        <p><span style={{fontWeight:"bold"}}>门牌号:</span>1001</p>
                        <img className="img" src={[require("../../img/hmm.jpg")]} alt=""/>
                    </div>

                    {/* 缴费记录 */}
                    <div className="payment" id="payment">
                        <i className="icon iconfont icon-1"></i>
                        <p className="word">缴费记录</p>
                        <span className="arrow" onClick={this.payment}>></span>
                    </div>

                    {/* 设置 */}
                    <div className="payment">
                        <i className="icon iconfont icon-set"></i>
                        <p className="word">设置</p>
                        <span className="arrow" onClick={this.setting}>></span>
                    </div>
                    
                </div>
            </div>
        )
    }
}
