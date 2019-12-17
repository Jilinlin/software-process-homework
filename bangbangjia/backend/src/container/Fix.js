import React, { Component } from 'react'

export default class Yezhu extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            num:[1,2,3,4,5]
        }
    }
    del(idx,rno){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
        fetch("http://localhost:4000/backweixiu_del",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"rno":rno})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    componentWillMount(){
        fetch("http://localhost:4000/backweixiu",{
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
        })
    }
    Page=(page)=>{
        fetch("http://localhost:4000/backweixiu",{
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

    changesel=(e,rno)=>{
        let fixsel=e.target.value;
        // console.log(fixsel,rno);
        fetch("http://localhost:4000/backweixiu_fenpei",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"fixsel":fixsel,"rno":rno})
        })
        .then(res=>res.text())
        .then(res=>{
            console.log(res);
            if(res=="update success"){
                alert("修改成功");
            }else{
                alert("修改失败");
            }
        })
    }
    changesel2=(e,rno)=>{
        let fixsel=e.target.value;
        // console.log(fixsel,rno);
        fetch("http://localhost:4000/backweixiu_jiejue",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"fixsel":fixsel,"rno":rno})
        })
        .then(res=>res.text())
        .then(res=>{
            console.log(res);
            if(res=="update success"){
                alert("修改成功");
            }else{
                alert("修改失败");
            }
        })
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <div className="yzheade">
                    <p>报修信息管理</p>
                </div>
                {/* 导航栏 */}
                <div className="yzcontent">
                    <ul className="ul0">
                        <li style={{marginLeft:-10}}>用户名</li>
                        <li style={{marginLeft:15}} >手机号</li>
                        <li style={{marginLeft:20}}>报修内容</li>
                        <li style={{marginLeft:20}}>是否分配工人</li>
                        <li>工人信息</li>
                        <li>状态</li>
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
                                        <li style={{marginLeft:-12}}>{item.name}</li>
                                        <li style={{marginLeft:-5}}>{item.uphone}</li>
                                        <li style={{lineHeight:2,width:'90px',marginLeft:'32px',paddingTop:13}}>{item.rcontent}</li>
                                        <li>
                                            <select onChange={(e)=>this.changesel(e,item.rno)} value={item.allocate}>
                                                <option value="未分配">未分配</option>
                                                <option value="已分配">已分配</option>
                                            </select>
                                        </li>
                                        <li style={{lineHeight:2}}>{item.worker}</li>
                                        <li style={{marginLeft:'20px'}}>
                                            <select onChange={(e)=>this.changesel2(e,item.rno)} value={item.rstate}>
                                                <option value="未解决">未解决</option>
                                                <option value="解决中">解决中</option>
                                                <option value="已解决">已解决</option>
                                            </select>
                                        </li>
                                        <li><button onClick={()=>this.del(idx,item.rno)}>删除</button></li>
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
