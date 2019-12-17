import React, { Component } from 'react'
import Search from 'antd/lib/input/Search';

export default class Yezhu extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            num:[1,2,3,4,5]
        }
    }
    del(idx,uname){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
        fetch("http://localhost:4000/backxianzhi_del",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"uname":uname})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    componentWillMount(){
        fetch("http://localhost:4000/backxianzhi",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"page":1})
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            })
            console.log(this.state.data);
        })
    }
    Page=(page)=>{
        fetch("http://localhost:4000/backxianzhi",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"page":page})
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })
        })
    }
    render() {
        return (
            <div>
                <div className="yzheade">
                    <p>二手市场管理</p>
                </div>
                <div className="yzcontent">
                    <ul className="ul0">
                        <li style={{marginLeft:-10}}>头像</li>
                        <li>用户名</li>
                        <li>真实姓名</li>
                        <li style={{marginLeft:10}}>手机号</li>
                        <li style={{marginLeft:10}}>发布时间</li>
                        <li style={{marginLeft:20}}>发布内容</li>
                        <li style={{marginLeft:35}}>操作</li>
                    </ul>
                </div>
                <div className='yzcon'>
                    <ul className='ul1'>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <ul className="ul2">
                                        <li><img style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:-5}} src={require('../img/'+item.upicture)}/></li>
                                        <li style={{marginLeft:-10}}>{item.uname}</li>
                                        <li>{item.name}</li>
                                        <li>{item.uphone}</li>
                                        <li style={{width:100}}>{item.ldate}</li>
                                        <li style={{width:100,lineHeight:1.5,paddingTop:13}}>{item.lcontent}</li>
                                        <li><button onClick={()=>this.del(idx,item.uname)}>删除</button></li>
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
                                return <li key={item} onClick={this.Page.bind(this,item)}>{item}</li>
                                // onClick={this.Change.bind(this,item)}
                            })
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}
