import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'
const gjine="997.7";

export default class Diannext extends React.Component {
    constructor(props){
        super(props);
        this.state={
            gongnuan:false,
            pay:false
        }
    }
    // 回到电费-新增用户
    handleClick=()=>{
        this.setState({
            gongnuan:true
        })
    }
    payThis=()=>{
        this.setState({
            pay:true
        })
    }
    render(){
        if(this.state.gongnuan){
            return  <Redirect to="/gongnuan"/>
        }if(this.state.pay){
            let jine=gjine;
            let danwei=this.props.location.state.danwei;
            let huhao=this.props.location.state.huhao;
            let message="供暖费";
            return <Redirect to={{pathname:"/payment",state:{jine:jine,goback:"gongnext",danwei:danwei,huhao:huhao,message:message}}}/>
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
                            <i style={{fontSize:35,color:"white"}} className='iconfont icon-gongnuan'></i>
                        </div>
                        <span className="dianfeispan">供暖费</span>
                    </div>

                    <div className="gnextcontent">
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
                        </ul>
                    </div>

                    {/* 提交表单 链接缴费 onSubmit={} */}
                    <form className="nextchong" onSubmit={this.payThis}>
                        <div className="nextchongzhi">
                            <span className="nextspan">应缴金额</span>
                            <span className="gongspan">997.70</span>
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