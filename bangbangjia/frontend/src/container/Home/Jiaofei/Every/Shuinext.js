import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'



export default class Shuinext extends React.Component {
    constructor(props){
        super(props);
        this.state={
            shuifei:false,
            pay:false
        }
    }
    // 回到水费-新增用户
    handleClick=()=>{
        this.setState({
            shuifei:true
        })
    }
    payThis=()=>{
        this.setState({
            pay:true
        })
    }
    render(){
        if(this.state.shuifei){
            return  <Redirect to="/shuifei"/>
        }if(this.state.pay){
            let jine=document.querySelector("input[name=jine]").value;
            let danwei=this.props.location.state.danwei;
            let huhao=this.props.location.state.huhao;
            let message="水费";
            return <Redirect to={{pathname:"/payment",state:{jine:jine,goback:"shuinext",danwei:danwei,huhao:huhao,message:message}}}/>
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

                <div style={{background:"#fff"}}> 
                    <div className="diannexttitle">
                        <div className="icon">
                            <i style={{fontSize:35,color:"white"}} className='iconfont icon-icon-humidity-copy'></i>
                        </div>
                        <span className="dianfeispan">水费</span>
                    </div>

                    <div className="snextcontent">
                        <ul>
                        <li className="nextli">
                                <span className="lileft">缴费单位</span><span className="liright">{this.props.location.state.danwei}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">缴费户号</span><span className="liright">{this.props.location.state.huhao}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">户名</span><span className="liright">王*花</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">住址信息</span><span className="liright">xx小区</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">当前欠费余额</span><span className="liright">0.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* 提交表单 链接缴费 onSubmit={} */}
                    <form className="nextchong" onSubmit={this.payThis}>
                        <div className="nextchongzhi">
                            <span className="nextspan">充值金额</span>
                            <input className="nextinput" type="text" name="jine" placeholder="请输入充值金额" autoFocus/>
                        </div>
                        <div className="nextbutton">
                            <input type="submit" value="立即缴费" className="nextthebutton"/>
                        </div>
                    </form>    
                </div>
                

            </div>
        )
    }
}