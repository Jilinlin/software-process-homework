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
    del(idx,uphone){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
        fetch("http://localhost:4000/backyezhu_del",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"uphone":uphone})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    userSearch=(e)=>{
        e.preventDefault();
        let message=document.querySelector("input[type=text]").value;
        if(message!=""){
            fetch("http://localhost:4000/backyezhu_ser",{
                method:"POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({"message":message})
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res
                })
                console.log(this.state.data);
            })
        }else if(message==""){
            fetch("http://localhost:4000/backyezhu",{
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
    }
    componentWillMount(){
        fetch("http://localhost:4000/backyezhu",{
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
        fetch("http://localhost:4000/backyezhu",{
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
                    <p>业主管理</p>
                    <input
                    placeholder="查找业主"
                    type="text"
                    style={{width:"230px",height:'50px',float:"right",marginTop:15,marginRight:30,border:"1px solid #eeeeee",borderRadius:"5px",paddingLeft:"5px"}}
                    onBlur={this.userSearch}
                    />
                </div>
                <div className="yzcontent">
                    <ul className="ul0">
                        <li>头像</li>
                        <li>用户名</li>
                        <li>性别</li>
                        <li>真实姓名</li>
                        <li style={{marginRight:10,marginLeft:20}}>手机号</li>
                        <li style={{marginLeft:"16px",marginRight:"12px"}}>门牌号</li>
                        <li>操作</li>
                    </ul>
                </div>
                <div className='yzcon'>
                    <ul className='ul1'>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <ul className="ul2">
                                        {/* <li><div style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:15}}>{item.upicture}</div></li> */}
                                        <li><img style={{width:50,height:50,borderRadius:50,overflow:'hidden',marginLeft:15}} src={require('../img/'+item.upicture)}/></li>
                                        <li >{item.uname}</li>
                                        <li>{item.usex}</li>
                                        <li>{item.name}</li>
                                        <li style={{width:80}}>{item.uphone}</li>
                                        <li style={{width:110}}>{item.unumber}</li>
                                        <li><button onClick={()=>this.del(idx,item.uphone)}>删除</button></li>
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
