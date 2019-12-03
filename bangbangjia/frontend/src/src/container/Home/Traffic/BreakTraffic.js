import React, { Component } from 'react'
import './Traffic.css'
import { Flex, Button,Picker, WhiteSpace, WingBlank, NavBar, Icon, ImagePicker, SegmentedControl,List} from 'antd-mobile';
import {Redirect} from 'react-router-dom'

export default class BreakTraffic extends Component {
                constructor(props){
                    super(props);
                            this.state={
                                back:false
                            }}
                back=(e)=>{
                    e.preventDefault();
                    this.setState({
                        back:true
                    })
            
                }
    render() {
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/findtraffic"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
                        <NavBar style={{backgroundColor:'#eee'}}
                            mode="light"
                            icon={<Icon type="left" style={{color:'black'}}/>}
                            onLeftClick={this.back}  
                        >违章查询</NavBar>
                        <div style={{width:'90%',marginLeft:'5%',height:'40px',fontSize:25,fontWeight:'bold'}}>冀A12345</div>
                        <div style={{width:'100%',height:'40px',backgroundColor:'white',float:'left'}}>
                            <p style={{float:'left',fontSize:20,color:'brown',marginLeft:'5%',lineHeight:'40px'}}>您有一条违章记录</p>
                            <p style={{float:'right',fontSize:20,lineHeight:'40px'}}>2019-11-29</p>
                        </div>
                        <div  style={{width:'100%',height:'40px',float:'left'}}>
                            <p style={{fontSize:20,lineHeight:'40px',marginLeft:'5%'}}>第一条</p>
                        </div>
                        <div style={{width:'100%',paddingLeft:'5%',height:'30px',backgroundColor:'white',float:'left'}}>
                             <p style={{width:'40%',height:'30px',lineHeight:'30px',float:'left'}}>状态</p>
                             <p style={{width:'30%',height:'30px',lineHeight:'30px',float:'left'}}>罚款</p>
                             <p style={{width:'30%',height:'30px',lineHeight:'30px',float:'left'}}>扣分</p>
                        </div>
                        <div style={{width:'100%',paddingLeft:'5%',height:'30px',backgroundColor:'white',float:'left'}}>
                                <p style={{width:'40%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>已处理</p>
                                <p style={{width:'30%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>100</p>
                                <p style={{width:'30%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>0分</p>
                   </div>
                       <div style={{width:'100%',height:'240px',backgroundColor:'white',float:'left',marginTop:10}}>
                           <ul style={{width:'95%',height:'240px',float:'left',marginLeft:'5%'}}>
                                 <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章时间 </li>
                                 <li style={{width:'100%',height:'30px',lineHeight:'30px',fontWeight:'bold',float:'left',fontSize:18}}>2019-11-11&nbsp;&nbsp;17:40:52</li>
                                 <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章地点</li>
                                 <li style={{width:'100%',height:'30px',lineHeight:'30px',fontWeight:'bold',float:'left',fontSize:18}}>大同街中山路至健康路路段</li>
                                 <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章内容</li>
                                 <li style={{width:'100%',height:'30px',lineHeight:'30px',fontSize:18,float:'left',fontWeight:'bold'}}>违反规定停放、临时停车且驾驶人不在现场</li>
                                 <li style={{width:'100%',height:'30px',lineHeight:'30px',fontSize:18,float:'left',fontWeight:'bold'}}> 或驾驶人虽然现场拒绝立即驶离，妨碍其他</li>
                                 <li style={{height:'30px',lineHeight:'30px',fontSize:18,float:'left',fontWeight:'bold'}} >车辆、行人通行的</li>
                            </ul>
                        </div>
                        <div style={{width:'50%',marginLeft:'25%',height:'40px',fontSize:20,backgroundColor:'white',float:'left',marginTop:'20px',lineHeight:'40px',color:'brown',textAlign:'center'}}>没有更多了</div>
            </div>
            
        )
    }
}
