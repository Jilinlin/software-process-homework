import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'
const touxiang=require('../../../../img/touxiang.jpg')
const password="123456";

class Paysuccess extends React.Component {
    constructor(props){
        super(props);
        // 获取密码
        let arr=this.props.location.search.slice(1).split("&");
        let pwd="";
        arr.map((item)=>{
            let arr2=item.split("=");
            // console.log(arr2[1]);
            pwd=pwd+arr2[1];
        })
        // console.log(pwd);
        if(pwd==password){
            this.state={
                back:false,
                display:true,
                display2:false
            }
        }else{
            this.state={
                back:false,
                display:false,
                display2:true
            }
        }
        
    }
    // 回到缴费
    handleClick=()=>{
        this.setState({
            back:true
        })
    }
    
    render(){
        if(this.state.back){
            return <Redirect to="/dianfei"/>
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
                        <div className={this.state.display?"success":"success1"}>
                            <i className="iconfont icon-dui" style={{fontSize:100,color:"#0190FB"}}></i>
                            <div className="successword">验证成功</div>
                        </div>

                        <div className={this.state.display2?"failure":"failure1"}>
                            <i className="iconfont icon-chahao" style={{fontSize:100,color:"#0190FB"}}></i>
                            <div className="successword">验证失败</div>
                        </div>

                    </div>
                </div>
            </div> 
        )
    }
}

export default Paysuccess;
