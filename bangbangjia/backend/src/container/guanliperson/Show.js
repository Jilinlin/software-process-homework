import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Show extends Component {
    constructor(props){
        super(props);
                this.state={
                    data:[this.props.location.state],
                    back:false
                }}
        back=(e)=>{
                    e.preventDefault();
                    this.setState({
                        back:true
                    })
                }
        
    render() {
        console.log(this.props)
        if(this.state.back){
            // console.log(this.state.back)
            return  <Redirect to="/appback/guanli"/>
        }
        return (
            <div> 
                <div style={{width:'660px',height:100,borderRight:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <p style={{float:'left',fontSize:'25px',marginTop:'25px',marginLeft:'20px'}}>显示管理员信息</p>
                    <div style={{width:'70px',height:'30px',float:'right',marginTop:35,marginRight:25}} onClick={this.back}>
                        <i  className='iconfont icon-fanhui' style={{float:'left',fontSize:20}}></i>
                        <p style={{marginLeft:30,fontSize:18}}>返回</p>
                    </div>
                </div>
                <div style={{width:'660px',height:450}}>
                    <ul>
                        {
                            this.state.data.map((item)=>{ 
                                return <li style={{width:'660px',height:'450px'}}>
                                       <div className='show'>
                                           <img style={{width:'100px',height:'100px',border:'1px solid #eee',borderRadius:10,marginLeft:280,marginTop:30}} src={require('../../img/touxiang1.jpg')}/>
                                       </div>
                                       <div >
                                               <div className='show1'>工号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.idcard}</div>
                                               <div className='show1'>姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</div>
                                               <div className='show1'>年龄：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.age}</div>
                                               <div className='show1'>身份证号：{item.Id}</div>
                                               <div className='show1'>手机号：&nbsp;&nbsp;&nbsp;&nbsp;{item.phone}</div>
                                            
                                       </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
