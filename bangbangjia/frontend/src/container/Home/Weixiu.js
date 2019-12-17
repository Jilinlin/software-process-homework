import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import { NavBar, Icon,ListView} from 'antd-mobile';

export default class Weixiu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          home:false,
          xiangqing:false,
          data:[],
          value:""
        };
    }
    componentDidMount(){
      fetch('http://localhost:8000/weixiu')
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res);
          this.setState({data:res});
      })
  }
    // 回到首页
    handleClick=()=>{
        this.setState({
            home:true
        })
    }
    // 跳转下一页
    doNext=()=>{
        this.setState({
            xiangqing:true
        })
    }
    render() {
        if(this.state.home){
            return  <Redirect to="/shouye"/>
        }else if(this.state.xiangqing){
            return <Redirect to="/xiangqing"/>
        }
        return (
            <div style={{height:"812px",background:"#F4F3F3"}}>
                {/* 维修服务标题 */}
                <NavBar
                    mode="light"
                    icon={<Icon style={{color:"black"}} size="lg" type="left" />}
                    onLeftClick={this.handleClick}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>维修服务</span>
                </NavBar>
                <ul>
                  {
                    this.state.data.map((item,idx)=>{
                      return <li key={idx}>
                            <div style={{width:'100%',height:'75px',backgroundColor:'white',marginTop:'17px',color:'black'}} > 
                                <div style={{lineHeight:'6px',float:'left',height:'70px',width:'135px',marginLeft:10}}>
                                    <p style={{fontSize:'20px',marginTop:18}}> {item.rcontent} </p>
                                    <p> {item.unumber} </p>
                                </div>
                                <div style={{float:'right',height:'70px',width:'145px',textAlign:'center',lineHeight:'5px'}} >
                                    {
                                        function(){
                                            if(item.rstate=='解决中'){
                                                return <p style={{marginTop:18,color:'rgb(251,136,2)'}}> {item.rstate} </p>
                                            }
                                            else if(item.rstate=='已解决'){
                                                return <p style={{marginTop:18,color:'rgb(82,150,143)'}}> {item.rstate} </p>
                                            }  
                                            else if(item.rstate=='未解决'){
                                                return <p style={{marginTop:18,color:'rgb(93,128,193)'}}> {item.rstate} </p>
                                            }                                       
                                        }()
                                        
                                    }
                                    <p> {item.rtime.slice(0,10)} </p>
                                    <p> {item.worker} </p>
                                </div>
                          </div>
                      </li>
                    })
                  }
                </ul>
                

                {/* 添加维修内容 */}
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <i onClick={()=>{this.doNext()}} style={{fontSize:50,color:'#ab1602'}} className='iconfont icon-jiahao'></i>
                </NavBar>
                          
            </div>
        )
    }
}
