import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

const data=[
    {
        id:1,
        name:'韩梅梅',
        time:'19小时前',
        world:'李阿姨跳的真好',
        dianzan:1212,
        pinglun:600
    }]
export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            back:false,
            data:{data}
        }
    }
    del(idx){
        console.log('66');
        data.splice(idx,1);
        this.setState({
            data
        })
    }
    mine=()=>{
        this.setState({
            back:true
        })
    }
    render() {
        if(this.state.back){
            return  <Redirect to="/shouye"/>
         }
        return (
            <div className="Gall">
                <NavBar
                    mode="light"
                    onLeftClick={this.mine}
                    icon={<Icon type="left" style={{color:"black"}} />}
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>我的</span>
                </NavBar>
                <ul className="kuang">
                    {
                        data.map((item,idx)=>{
                            return <li key={idx}>
                                <div style={{height:80}}>
                                    <div className="touxiang"></div>
                                    <div className="name">
                                        <p>{item.name}</p>
                                        <p className="time">{item.time}</p>
                                    </div>
                                    <button className="del" onClick={()=>this.del(idx)}>删除</button>
                                </div>
                                <p className="zhengwen">{item.world}</p>
                                <div className='tupian'></div>
                                <footer>
                                    <div className="iconfont icon-dianzan"><span>{item.dianzan}</span></div>
                                    <div className="iconfont icon-pinglun"><span>{item.pinglun}</span></div>
                                </footer>
                            </li>
                            })
                        }
                    </ul>
            </div>
        )
    }
}
