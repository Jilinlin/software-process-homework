import React, { Component } from 'react'
import {Redirect,Link,Router} from 'react-router-dom'
import { formatCountdown } from 'antd/lib/statistic/utils';

const data=[{
    PetName:'Jeeny',
    name:'小皮筋',
    sex:'女',
    idcard:3002,
    age:'18',
    Id:'130730199809154223',
    phone:18731373197
},

{
    PetName:'Danny',
    name:'小木头',
    sex:'男',
    idcard:3003,
    age:'18',
    Id:'130730199809154223',
    phone:18731373197
},
{
    PetName:'LiMing',
    name:'李明',
    sex:'男',
    idcard:3004,
    age:'18',
    Id:'130730199809154223',
    phone:18731373197
},
{
    PetName:'HanMeiMei',
    name:'韩梅梅',
    sex:'女',
    idcard:3005,
    age:'18',
    Id:'130730199809154223',
    phone:18731373197
},
]


export default class Guanli extends Component {
            constructor(props){
                super(props);
                        this.state={
                            add:false,
                            data:data,
                            show:false,
                            data1:{}
                        }
                    }

            add=(e)=>{
                e.preventDefault();
                this.setState({
                    add:true
                })
            }
            show=(name)=>{
                console.log(name)
                // e.preventDefault();
                this.setState({
                    show:true,
                    data1:name
                })
            }

    render() {
        if(this.state.add){
            console.log(this.state.add)
            return  <Redirect to="/appback/guanli/tianjia"/>
        }
        if(this.state.show){
            console.log(this.state.show)
            return (
                    <Redirect to={{
                    pathname:"/appback/guanli/show",
                    state:this.state.data1
                }}
                />
                
            ) 
            // return <Redirect to='/show' />
            
        }
        return (
            <div> 
                <div style={{width:'660px',height:100,borderRight:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <p style={{float:'left',fontSize:'25px',marginTop:'25px',marginLeft:'20px'}}>管理人员</p>
                    <button value='添加' style={{float:'right',width:100,height:30,marginTop:'25px',marginRight:'20px',borderRadius:5,backgroundColor:'white',border:'1px solid gray'}} onClick={this.add}>添加</button>
                </div>
                <div style={{width:'660px',height:325}}>
                    <ul>
                        {
                            this.state.data.map((item)=>{ 
                                return <li style={{width:'252px',height:'122px',marginLeft:50,float:'left',marginTop:30,borderRadius:5,border:'1px solid #eee', boxShadow: '0px 5px 8px gray'}}>
                                       <div className='manage'>
                                           <img src={require('../../img/touxiang1.jpg')}/>
                                       </div>
                                       <div className='manage1'>
                                           <div className='manage2'>
                                               <div style={{height:40,width:200,float:'left',fontWeight:'bold',fontSize:20}}>{item.PetName}</div>
                                               <div style={{width:200,float:'left'}}>姓名：{item.name}</div>
                                               <div style={{width:200,float:'left'}}>性别：{item.sex}</div>
                                            </div>
                                            <div className='manage3'>
                                                <div>
                                                    <i  className='iconfont icon-xiazhai' style={{float:'left',fontSize:22}}></i>
                                                </div>
                                                <div style={{float:'left',marginTop:5,marginLeft:5}}>{item.idcard}</div>
                                                <div>
                                                <i  className='iconfont icon-web-icon-' style={{float:'left',fontSize:22,marginLeft:30}}></i>
                                                </div>
                                                <div style={{float:'left',marginTop:5,marginLeft:5,color:'brown'}} onClick={()=>{this.show({item}.item)}}>更多</div>
                                            </div>
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
