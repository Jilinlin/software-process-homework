import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';

export default class Guangchang extends Component {
    constructor(props){
        super(props);
        this.state={
            fabu:false,
            mine:false,
            data:[],
            guanzhu:'关注',
            pinglun:true
        }

    }
    componentDidMount(){
        fetch('http://localhost:8000/guangchang')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({data:res});
        })
    }
    clickGuan=(idx,follow,pltime)=>{
        let data =this.state.data;
        if(follow=='关注'){
           data[idx].follow='已关注';
           this.setState({
               data
           })
            // console.log(data);
        }else if(follow=='已关注'){
            data[idx].follow='关注';
           this.setState({
               data
           })
        }
        fetch("http://localhost:8000/follow",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"follow":follow,"pltime":pltime})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(follow,pltime);
        })
        
    }
    dianzan=(uphone,plike,pltime)=>{
        console.log(uphone);
        fetch("http://localhost:8000/dianzan",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"uphone":uphone,"plike":plike,"pltime":pltime})
        })
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res})
        })
        
    }
    pinglun=()=>{
        if(this.state.pinglun==true){
            this.setState({
                pinglun:false
            })
        }else if(this.state.pinglun==false){
            this.setState({
                pinglun:true
            })
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
                        this.state.data.map((item,idx)=>{
                            
                            return <li key={idx}>
                                <div style={{height:80}}>
                                    <div className="touxiang">
                                        <img src={require(`../../img/`+item.picture)} />
                                    </div>
                                    <div className="name">
                                        <p>{item.name}</p>
                                        <p className="time">{item.pltime}</p>
                                    </div>
                                    <button className="guanzhu" onClick={()=>this.clickGuan(idx,item.follow,item.pltime)}> {item.follow} </button>
                                </div>
                                <p className="zhengwen">{item.plcontent}</p>
                                <div className='tupian'>
                                    {
                                        function(){
                                            if(item.plpicture){
                                               return <img src={require(`../../img/`+item.plpicture)} style={{marginLeft:'-8px'}}/>
                                            }
                                        }()
                                    }
                                </div>
                                <footer>
                                    <div className="iconfont icon-dianzan" onClick={()=>this.dianzan(item.uphone,item.plike,item.pltime)} style={{marginRight:"120px",marginLeft:"70px",marginTop:"10px"}}><span>{item.plike}</span></div>
                                    <div className="iconfont icon-pinglun" onClick={this.pinglun} style={{marginTop:"10px"}}><span>{item.commentno}</span></div>
                                </footer>
                                {/* 评论 */}
                                <form style={{borderTop:"1px solid #eeeeee",fontSize:"15px",margin:"0 10px 0 10px",width:"355px",height:"40px",lineHeight:"40px",display:this.state.pinglun?"none":"block"}}>
                                    {
                                        function(){
                                            if(item.plpicture){
                                               return <img style={{width:"30px",height:"30px",borderRadius:"15px",marginRight:"5px"}} src={require(`../../img/`+item.plpicture)}/>
                                            }
                                        }()
                                    }
                                    {item.comment}
                                    <span style={{float:"right"}}>2019/12/19 10:27:33</span>
                                </form>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
