import React, { Component } from 'react'
import Search from 'antd/lib/input/Search';
import {Link,Route,Redirect} from 'react-router-dom';

const data=[
    {
        id:1,
        title:'关于垃圾分类的通知',
        time:'2019.10.6',
        content:'为营造全社会共同践行垃圾分类理念的良好氛围....'
    },
    {
        id:1,
        title:'关于路灯维修的通知',
        time:'2019.10.1',
        content:'请各位业主注意，小区将于2019年10月3日进行...'
    },
    {
        id:1,
        title:'关于治理空气污染的通知',
        time:'2019.9.19',
        content:'为响应国家政策，现对小区空气污染问题...'
    }
]
export default class Gonggao extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data,
            num:['<',1,2,3,4,5,'>']
        }
    }
    del(idx){
        console.log('66');
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
    }
    render() {
        return (
            <div>
                <div className="yzheade">
                    <p>公告管理</p>
                    <Search
                    placeholder="查找公告"
                    style={{width:"230px",height:'45px',marginTop:15,marginLeft:72}}
                    />
                    <button><Link to='/appback/gonggao/fabuNotice'>发布公告</Link></button>
                </div>
                <div className="yzcontent">
                    <ul className="Gul0">
                        <li>序号</li>
                        <li style={{marginLeft:45}}>标题</li>
                        <li style={{marginLeft:45}}>日期</li>
                        <li style={{marginLeft:60}}>内容</li>
                        <li style={{marginLeft:55}}>操作</li>
                    </ul>
                </div>
                <div className='yzcon'>
                    <ul className='ul1'>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <ul className="Gul2">
                                        <li>{item.id}</li>
                                        <li style={{width:145}}>《{item.title}》</li>
                                        <li>{item.time}</li>
                                        <li style={{width:150,lineHeight:2,marginLeft:20,marginRight:10}}>{item.content}</li>
                                        <li><button onClick={()=>this.del(idx)}>删除</button></li>
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div  className="numb" >
                    <ul>
                        {
                                this.state.num.map((item)=>{
                                    return <li key={item}>{item}</li>
                                    // onClick={this.Change.bind(this,item)}
                                })
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}
