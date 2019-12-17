import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'


export default class Diannext extends React.Component {
    constructor(props){
        super(props);
        this.state={
            diaofei:false,
            pay:false,
            data:[]
        }
    }
    // 回到电费-新增用户
    handleClick=()=>{
        this.setState({
            diaofei:true
        })
    }
    payThis=(e)=>{
        e.preventDefault();
        let jine=document.querySelector("input[type=text]").value;
        let danwei=this.props.location.state.danwei;
        let huhao=this.props.location.state.huhao;
        let time=new Date().toLocaleString();
        console.log(time);
        fetch('http://localhost:8000/jiaofeiadd',{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"danwei":danwei,"huhao":huhao,"jine":jine,"time":time})
            // body:JSON.stringify({"danwei":danwei,"huhao":huhao,"jine":jine})
        })
        .then((res)=>res.text())
        .then((res)=>{
            if(res=="ok"){
                this.setState({
                    pay:true
                })
            }else{
                alert("出问题了");
            }
        })
    }
    componentWillMount(){
        let danwei=this.props.location.state.danwei;
        let huhao=this.props.location.state.huhao;
        fetch('http://localhost:8000/jiaofei',{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"danwei":danwei,"huhao":huhao})
        })
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res[0]);
            this.setState({data:res[0]});
        })
    }
    render(){
        if(this.state.diaofei){
            return  <Redirect to="/dianfei"/>
        }if(this.state.pay){
            let jine=document.querySelector("input[name=jine]").value;
            let danwei=this.props.location.state.danwei;
            let huhao=this.props.location.state.huhao;
            let message="电费";
            return <Redirect to={{pathname:"/payment",state:{jine:jine,goback:"diannext",danwei:danwei,huhao:huhao,message:message}}}/>
        }
        // console.log(this.props.location.state);
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
                        <div className="dianicon">
                            <i style={{fontSize:35,color:"white"}} className='iconfont icon-shandian'></i>
                        </div>
                        <span className="dianfeispan">电费</span>
                    </div>

                    <div className="nextcontent">
                        <ul>
                            <li className="nextli">
                                <span className="lileft">缴费单位</span><span className="liright">{this.state.data.punit}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">缴费户号</span><span className="liright">{this.state.data.unumber}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">户名</span><span className="liright">{this.state.data.name}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">住址信息</span><span className="liright">{this.state.data.cellname}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">当前可用余额</span><span className="liright">{this.state.data.balance}</span>
                            </li>
                            <li className="nextli">
                                <span className="lileft">当前欠费余额</span><span className="liright">{this.state.data.arrearage}</span>
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