import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'
const touxiang=require('../../../../img/touxiang.jpg')

class Paypwd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            back:false
        }
    }
    // 修改状态跳到下一个input
    handleChange=(e)=>{
        e.target.parentNode.nextElementSibling.firstElementChild.focus();
    }
    // 回到支付确认
    handleClick=()=>{
        this.setState({
            back:true
        })
    }
    // 支付成功
    doNext=()=>{
        // const password="123456";
        // let pwd1=document.querySelector("input[name=pwd1]").value;
        // let pwd2=document.querySelector("input[name=pwd2]").value;
        // let pwd3=document.querySelector("input[name=pwd3]").value;
        // let pwd4=document.querySelector("input[name=pwd4]").value;
        // let pwd5=document.querySelector("input[name=pwd5]").value;
        // let pwd6=document.querySelector("input[name=pwd6]").value;
        // let pwd=pwd1+pwd2+pwd3+pwd4+pwd5+pwd6;
        // if(pwd===password){
        // }
        // console.log(pwd);
    }

    render(){
        let jine=this.props.location.state.jine;
        let danwei=this.props.location.state.danwei;
        let huhao=this.props.location.state.huhao;
        let message=this.props.location.state.message;
        let goback=this.props.location.state.goback;
        if(this.state.back){
            // console.log(this.props.location.state);
            return <Redirect to={{pathname:"/payment",state:{jine:jine,goback:goback,danwei:danwei,huhao:huhao,message:message}}}/>
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
                            icon={<Icon style={{color:"#cac9c9"}} size="lg" type="left" />}
                            onLeftClick={this.handleClick}
                            style={{background:"#fff",height:"10%",borderBottom:"1px solid #CAC9C9"}}
                        >
                            <span style={{fontSize:"25px"}}>
                                请输入支付密码
                            </span>
                        </NavBar>
                        <div className="yanzheng">
                            <form className="pwd" action="/paysuccess" onSubmit={this.doNext}>
                                <ul className="pwdul">
                                    <li>
                                        <input onChange={this.handleChange} autoFocus={true} type="password" name="pwd1" maxLength="1"/>
                                    </li>
                                    <li>
                                        <input onChange={this.handleChange}  type="password" name="pwd2" maxLength="1"/>
                                    </li>
                                    <li>
                                        <input onChange={this.handleChange}   type="password" name="pwd3" maxLength="1"/>
                                    </li>
                                    <li>
                                        <input onChange={this.handleChange}  type="password" name="pwd4" maxLength="1"/>
                                    </li>
                                    <li>
                                        <input onChange={this.handleChange}  type="password" name="pwd5" maxLength="1"/>
                                    </li>
                                    <li>
                                        <input type="password" name="pwd6" maxLength="1"/>
                                    </li>
                                </ul>
                                <input type="submit" value="提交" style={{display:"none"}} />
                            </form>
                            <div className="forget">忘记密码？找回并完成支付</div>
                        </div>

                        <div className="success">
                            <i className="iconfont icon-dui" style={{fontSize:100,color:"#0190FB"}}></i>
                            <div className="successword">验证成功</div>
                        </div>

                    </div>
                </div>
            </div> 
        )
    }
}

export default Paypwd;
