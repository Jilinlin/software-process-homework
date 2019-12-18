import React, { Component } from 'react'
import Search from 'antd/lib/input/Search';
import {Link,Route,Redirect} from 'react-router-dom';

export default class Gonggao extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            num:[1,2,3,4,5]
        }
    }
    del(idx){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
        idx=idx+1;
        fetch("http://localhost:4000/backgonggao_del",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"idx":idx})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    gonggaoSearch=(e)=>{
        e.preventDefault();
        let message=document.querySelector("input[type=text]").value;
        if(message!=""){
            fetch("http://localhost:4000/backgonggao")
            .then((res)=>res.json())
            .then((res)=>{
                var i;
                for(i=0;i<res.length;i++){
                    if(res[i].aname.indexOf(message)!=-1){
                        let theData=[];
                        theData.push(res[i]);
                        this.setState({
                            data:theData
                        })
                        break;
                    }
                }
                if(i==res.length){
                    alert("未找到包含这个内容的公告");
                }
            })
        }else if(message==""){
            fetch("http://localhost:4000/backgonggao_post",{
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
        fetch("http://localhost:4000/backgonggao_post",{
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
        fetch("http://localhost:4000/backgonggao_post",{
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
                    <p>公告管理</p>
                    <input
                    type="text"
                    placeholder="查找公告"
                    style={{width:"230px",height:'45px',marginTop:15,marginLeft:72,border:"1px solid #eeeeee",borderRadius:"5px",paddingLeft:"5px"}}
                    onBlur={this.gonggaoSearch}
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
                                console.log(item.adate);
                                return <li key={idx}>
                                    <ul className="Gul2">
                                        <li style={{width:50}}>{item.ano}</li>
                                        <li style={{width:155}}>{item.aname}</li>
                                        <li style={{width:115}}>{item.adate.slice(0,11)}</li>
                                        <li style={{width:150,lineHeight:2,marginLeft:20,marginRight:10}}>{item.acontent.slice(0,17)}...</li>
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
                                    return <li key={item} onClick={this.Page.bind(this,item)}>{item}</li>
                                })
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}
