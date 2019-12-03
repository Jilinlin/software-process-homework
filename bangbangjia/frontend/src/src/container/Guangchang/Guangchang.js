import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';


const data=[
    {
        name:'韩梅梅',
        time:'19小时前',
        world:'李阿姨跳的真好',
        guanzhu:0,
        dianzan:1212,
        pinglun:600
    },
    {
        name:'李雷',
        time:'18小时前',
        world:'今天天气真好',
        dianzan:1212,
        pinglun:600
    }

]
export default class Guangchang extends Component {
    constructor(props){
        super(props);
        this.state={
            fabu:false,
            mine:false,
            data:data
        }

    }
    render() {
        return (
            <div className="Gall">
                <NavBar
                    mode="light"
                    style={{background:"#f2f2f2",height:"60px",lineHeight:"60px"}}
                >
                    <span style={{fontSize:"22px"}}>广场</span>
                </NavBar>
                <div className='fw'>
                    <header style={{paddingTop:'1%'}}>
                        <Link to='/fabu' className="iconfont icon-zhiding" ><span>发布</span></Link>
                        <span>|</span>
                        <Link  to='/mys' className="iconfont icon-guanyuwomen"><span>我的</span></Link>
                    </header>
                </div>
                <ul className="kuang">
                    {
                        this.state.data.map((item)=>{
                            return <li key={item}>
                                <div style={{height:80}}>
                                    <div className="touxiang"></div>
                                    <div className="name">
                                        <p>{item.name}</p>
                                        <p className="time">{item.time}</p>
                                    </div>
                                    <button className="guanzhu">关注</button>
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
