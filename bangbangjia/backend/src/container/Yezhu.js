import React, { Component } from 'react'
import Search from 'antd/lib/input/Search';

const data=[
    {
        touxiang:'头像',
        petName:'Jenny',
        sex:'女',
        trueName:'珍妮',
        tel:13611112222,
        houseNum:'7号楼四单元301室'
    },
    {
        touxiang:'头像',
        petName:'Danny',
        sex:'男',
        trueName:'丹尼',
        tel:15033334444,
        houseNum:'3号楼三单元402室'
    },
    {
        touxiang:'头像',
        petName:'HanMei',
        sex:'女',
        trueName:'韩梅梅',
        tel:18755555666,
        houseNum:'5号楼二单元202室'
    }
]
export default class Yezhu extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data,
            num:['<',1,2,3,4,5,'>']
        }
    }
    del(idx){
        // console.log('66');
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
                    <p>业主管理</p>
                    <Search
                    placeholder="查找业主"
                    style={{width:"230px",height:'50px',float:"right",marginTop:15,marginRight:30}}
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
                                        <li><div style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:15}}>{item.touxiang}</div></li>
                                        <li >{item.petName}</li>
                                        <li>{item.sex}</li>
                                        <li>{item.trueName}</li>
                                        <li style={{width:80}}>{item.tel}</li>
                                        <li style={{width:110}}>{item.houseNum}</li>
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
