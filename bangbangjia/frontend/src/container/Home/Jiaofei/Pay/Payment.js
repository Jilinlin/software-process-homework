import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'
const touxiang=require('../../../../img/touxiang.jpg')


export default class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            back:false,
            paypwd:false
        }
    }
    // 回到输入支付金额
    handleClick=()=>{
        this.setState({
            back:true
        })
    }
    // 到输入密码
    doNext=()=>{
        this.setState({
            paypwd:true
        })
    }
    render(){
        let jine=parseFloat(this.props.location.state.jine).toFixed(2);
        const goback=this.props.location.state.goback;
        let danwei=this.props.location.state.danwei;
        let huhao=this.props.location.state.huhao;
        if(this.state.back){
            return  <Redirect to={{pathname:"/"+goback,state:{danwei:danwei,huhao:huhao}}}/>
        }else if(this.state.paypwd){
            let message=this.props.location.state.message;
            return <Redirect to={{pathname:"/paypwd",state:{jine:this.props.location.state.jine,goback:goback,danwei:danwei,huhao:huhao,message:message}}}/>
        }
        return(    
            <div className="out">
                <div style={{height:"100%",background:"#284660"}}>
                    <div style={{height:"38%",paddingTop:"15%"}}>
                        <div className="pay_touxiang">
                            <img src={touxiang}/>
                        </div>
                        <div className="telnum">
                            123××××5678
                        </div>
                    </div>
                    <div style={{height:"62%",background:"#fff"}}>
                        <NavBar
                            mode="light"
                            icon={<Icon style={{color:"#cac9c9"}} size="lg" type="cross" />}
                            onLeftClick={this.handleClick}
                            rightContent={[
                                <i key="0" style={{fontSize:25}} className="iconfont icon-question"></i>
                            ]}
                            style={{background:"#fff",height:"10%",borderBottom:"1px solid #CAC9C9"}}
                        >
                            <span style={{fontSize:"25px"}}>
                                <i style={{fontSize:28,color:"#0190FB"}} className="iconfont icon-zhifubao"></i>确认支付
                            </span>
                        </NavBar>

                        <div className="payjine">
                            <div className="jinetop">
                                <span style={{fontSize:"25px"}}>¥</span>
                                <span style={{fontSize:"50px"}}>{jine}</span>
                            </div>
                            <div className="jinemiddle">
                                <span className="bank_left">收款方</span>
                                    <span className="bank_right">
                                        {this.props.location.state.danwei}
                                    </span> 
                                </div>
                            <div className="jinebottom">
                                <span className="bank_left">订单信息</span>
                                <span className="bank_right">
                                    {this.props.location.state.message}
                                </span>        
                            </div>
                        </div>

                        <div className="paybank">
                            <span className="bank_left">付款方式</span>
                            <span className="bank_right">
                                xx银行储蓄卡(1234)<i className="iconfont icon-arrowRight" style={{color:"#000",fontSize:"22px"}}></i>
                            </span>
                        </div>

                        <button className="yes" onClick={this.doNext}>立即付款</button>
                    </div>
                    

                    
                </div>
            </div> 
            
        )
    }
}
