import React, { Component } from 'react'

const data=[
    {
        touxiang:'头像',
        petName:'Jenny',
        trueName:'珍妮',
        tel:13611112222,
        time:'2019.10.10',
        world:'小区垃圾随意投放现象严重...'
    },
    {
        touxiang:'头像',
        petName:'Danny',
        trueName:'丹尼',
        tel:15033334444,
        time:'2019.10.3',
        world:'小区车辆随意停放影响出行...'
    },
    {
        touxiang:'头像',
        petName:'HanMei',
        trueName:'韩梅梅',
        tel:18755555666,
        time:'2019.9.9',
        world:'小区植被较少，绿化工作不到位...'
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
                        <li style={{marginRight:20,marginLeft:20}}>反馈内容</li>
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
                                        <li><div style={{width:50,height:50,backgroundColor:'rgb(235,236,253)',borderRadius:50,overflow:'hidden',marginLeft:15}}>{item.touxiang}</div></li>
                                        <li >{item.petName}</li>
                                        <li style={{marginLeft:-5}} >{item.trueName}</li>
                                        <li>{item.tel}</li>
                                        <li style={{lineHeight:2,marginLeft:15,marginRight:15,width:90}}>{item.world}</li>
                                        <li>
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
                {/* 页脚 */}
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
