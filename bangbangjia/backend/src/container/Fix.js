import React, { Component } from 'react'

const data=[
    {
        trueName:'珍妮',
        tel:13611112222,
        content:'7号楼4单元301室地暖坏了',
        worker:'王师傅 13611112222'
    },
    {
        trueName:'丹尼',
        tel:15033334444,
        content:'3号楼3单元402室水龙头崩了',
        worker:'王师傅 13611112222'
    },
    {
        trueName:'韩梅梅',
        tel:18755555666,
        content:'5号楼2单元202室下水道堵了',
        worker:'王师傅 13611112222'
    }
]
export default class Yezhu extends Component {
    constructor(props){
        super(props);
        this.state={
            data:data
        }
    }
    del(idx){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
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
                                        <li style={{marginLeft:-12}}>{item.trueName}</li>
                                        <li style={{marginLeft:-5}}>{item.tel}</li>
                                        <li style={{lineHeight:2,width:'90px',marginLeft:'32px'}}>{item.content}</li>
                                        <li>
                                            <select>
                                                <option>未分配</option>
                                                <option>已分配</option>
                                            </select>
                                        </li>
                                        <li style={{lineHeight:2}}>{item.worker}</li>
                                        <li style={{marginLeft:'20px'}}>
                                            <select>
                                                <option>未解决</option>
                                                <option>解决中</option>
                                                <option>已解决</option>
                                            </select>
                                        </li>
                                        <li><button onClick={()=>this.del(idx)}>删除</button></li>
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
