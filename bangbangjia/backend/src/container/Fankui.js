import React, { Component } from 'react'


export default class Fankui extends Component {
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
        fetch("http://localhost:4000/backfankui_del",{
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
        fetch("http://localhost:4000/backfankui",{
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
        fetch("http://localhost:4000/backfankui",{
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
                {/* 标题 */}
                <div className="yzheade">
                    <p>反馈管理</p>
                </div>
                {/* 导航栏 */}
                <div className="yzcontent">
                    <ul className="ul0">
                        <li>头像</li>
                        <li>用户名</li>
                        <li style={{marginLeft:-5}} >真实姓名</li>
                        <li>手机号</li>
                        <li style={{marginRight:40,marginLeft:40}}>反馈内容</li>
                        <li>操作</li>
                    </ul>
                </div>
                {/* 渲染信息显示 */}
                <div className='yzcon'>
                    <ul className='ul1'>
                        {
                            this.state.data.map((item,idx)=>{
                                return <li key={idx}>
                                    <ul className="ul2">
                                        <li><img style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:15}} src={require('../img/'+item.upicture)}/></li>
                                        <li >{item.uname}</li>
                                        <li style={{marginLeft:-5}} >{item.name}</li>
                                        <li>{item.uphone}</li>
                                        <li style={{lineHeight:2,marginLeft:15,marginRight:15,width:130}}>{item.fcontent}</li>
                                        <li><button onClick={()=>this.del(idx,item.uname)}>删除</button></li>
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {/* 页脚 */}
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
