import React, { Component } from 'react'
import Search from 'antd/lib/input/Search';

const data=[
    {
        touxiang:'头像',
        petName:'Jenny',
        trueName:'珍妮',
        tel:13611112222,
        time:'2019.10.10',
        world:'出售旧沙发一套，五成新，有意私聊'
    },
    {
        touxiang:'头像',
        petName:'Danny',
        trueName:'丹尼',
        tel:15033334444,
        time:'2019.10.3',
        world:'出售毛呢大衣一件，八成新，230元'
    },
    {
        touxiang:'头像',
        petName:'HanMei',
        trueName:'韩梅梅',
        tel:18755555666,
        time:'2019.9.9',
        world:'出售各种包包，有意者联系我~'
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
                                        <li><div style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:-5}}>{item.touxiang}</div></li>
                                        <li style={{marginLeft:-10}}>{item.petName}</li>
                                        <li>{item.trueName}</li>
                                        <li>{item.tel}</li>
                                        <li>{item.time}</li>
                                        <li style={{width:120,lineHeight:2}}>{item.world}</li>
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
