import React from 'react';
import {Redirect} from "react-router-dom"
import { NavBar, Icon} from 'antd-mobile';
import '../Jiaofei.css'
const touxiang=require('../../../../img/touxiang.jpg')
const password="123456";

class Paysuccess extends React.Component {
    constructor(props){
        super(props);
        this.state={
            back:false
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
            return <Redirect to="/jiaofei"/>
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

export default Paysuccess;
