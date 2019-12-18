import React, { Component } from 'react'
import './Traffic.css'
import { Flex, Button,Picker, WhiteSpace, WingBlank, NavBar, Icon, ImagePicker, SegmentedControl,List} from 'antd-mobile';
import {Redirect} from 'react-router-dom'

export default class BreakTraffic extends Component {
                constructor(props){
                    super(props);
                            this.state={
                                back:false,
                                data:[]
                            }}
                back=(e)=>{
                    e.preventDefault();
                    this.setState({
                        back:true
                    })
            
                }
                componentWillMount(){
                    var check={
                        "check1":this.props.location.state.check1,
                        "check2":this.props.location.state.check2,
                        "check3":this.props.location.state.check3
                    }
                    // console.log(check);
                    fetch('http://localhost:8000/weizhang',{
                        method:'POST',
                        mode:'cors',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(check)
                    })
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res);
                        this.setState({
                            data:res
                        }) 
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
                        <ul>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <div style={{width:'90%',marginLeft:'5%',height:'40px',fontSize:25,fontWeight:'bold'}}>{item.plate}</div>
                                    <div style={{width:'100%',height:'40px',backgroundColor:'white',float:'left'}}>
                                        <p style={{float:'left',fontSize:20,color:'brown',marginLeft:'5%',lineHeight:'40px'}}>您有{this.state.data.length}条违章记录</p>
                                        <p style={{float:'right',fontSize:17,lineHeight:'40px',marginRight:'5%'}}>{item.ttime}</p>
                                    </div>
                                    <div  style={{width:'100%',height:'40px',float:'left'}}>
                                        <p style={{fontSize:20,lineHeight:'40px',marginLeft:'5%'}}>第{idx+1}条</p>
                                    </div>
                                    <div style={{width:'100%',paddingLeft:'5%',height:'70px',backgroundColor:'white',float:'left',border:"1px solid #eeeeee"}}>
                                        <p style={{marginBottom:"5px",width:'40%',height:'30px',lineHeight:'30px',float:'left',fontSize:15}}>状态</p>
                                        <p style={{marginBottom:"5px",width:'30%',height:'30px',lineHeight:'30px',float:'left',fontSize:15}}>罚款</p>
                                        <p style={{marginBottom:"5px",width:'30%',height:'30px',lineHeight:'30px',float:'left',fontSize:15}}>扣分</p>
                                    {/* </div>
                                    <div style={{width:'100%',paddingLeft:'5%',height:'30px',backgroundColor:'white',float:'left'}}> */}
                                            <p style={{marginBottom:"5px",width:'40%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>{item.tstate}</p>
                                            <p style={{marginBottom:"5px",width:'30%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>{item.fine}</p>
                                            <p style={{marginBottom:"5px",width:'30%',height:'30px',lineHeight:'30px',fontSize:20,float:'left',fontWeight:'bold'}}>{item.point}分</p>
                                </div>
                                <div style={{width:'100%',height:'240px',backgroundColor:'white',float:'left'}}>
                                    <ul style={{width:'95%',height:'240px',float:'left',marginLeft:'5%'}}>
                                            <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章时间 </li>
                                            <li style={{width:'100%',height:'30px',lineHeight:'30px',fontWeight:'bold',float:'left',fontSize:18}}>{item.ttime}</li>
                                            <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章地点</li>
                                            <li style={{width:'100%',height:'30px',lineHeight:'30px',fontWeight:'bold',float:'left',fontSize:18}}>{item.tplace}</li>
                                            <li style={{width:'95%',height:'30px',lineHeight:'30px',float:'left',}}>违章内容</li>
                                            <li style={{width:'100%',height:'30px',lineHeight:'30px',fontSize:18,float:'left',fontWeight:'bold'}}>
                                                <div>{item.tcontent}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            })
                        }
                        </ul>
                        <div style={{width:'50%',marginLeft:'25%',height:'40px',fontSize:20,backgroundColor:'white',float:'left',marginTop:'20px',lineHeight:'40px',color:'brown',textAlign:'center'}}>没有更多了</div>
            </div>
            
        )
    }
}
