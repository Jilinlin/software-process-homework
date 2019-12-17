import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { NavBar} from 'antd-mobile';

import "./index.css"

export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            payment:false,
            setting:false,
            data:[]
        }
    }
    componentDidMount(){
        // fetch('http://localhost:8000/mine')
        // .then((res)=>res.text())
        // .then((res)=>{
        //     console.log(res);
        //     // this.setState({data:res});
        // })
        let phone=localStorage.getItem('phonenumber');
        fetch("http://localhost:8000/mine", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phonenumber":phone})
        })
        .then((res) => res.json())
        .then((res) => {
            // console.log(localStorage.getItem('phonenumber'));
            this.setState({
                data:res,
            })
        })
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
            <div style={{height:"812px",background:"#fff"}}>
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>我的</span>
                </NavBar>

                <div className="box">
                    {/* 用户名片 */}
                        <ul className="card">
                       {
                         this.state.data.map((item,idx)=>{
                            return <li key={idx}>
                                    <p style={{fontSize:"20px",fontWeight:"bold"}}>{item.name}</p>
                                    <p><span style={{fontWeight:"bold"}}>电话:</span>{item.uphone}</p>
                                    <p><span style={{fontWeight:"bold"}}>门牌号:</span>{item.unumber}</p>
                                    <img className="img" src={require(`../../img/`+item.upicture)} alt=""/>
                            </li>
                            })
                        }
                    </ul>
            

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
