import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

export default class Mys extends Component {
    constructor(props){
        super(props);
        this.state={
            back:false,
            data:[]
        }
    }
    componentDidMount(){
        let phone=localStorage.getItem("phonenumber");
        fetch('http://localhost:8000/mys',{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"phone":phone})
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({data:res});
        })
    }
    del(idx,pltime){
        let data =[...this.state.data];
        data.splice(idx,1);
        this.setState({
            data
        })
        // console.log(pltime)
        fetch("http://localhost:8000/mys_del",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"pltime":pltime})
        })
        .then((res)=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    mine=()=>{
        this.setState({
            back:true
        })
    }
    render() {
        // console.log(this.state.data)
        if(this.state.back){
            return  <Redirect to={{pathname:"/shouye",state:{tab:"2"}}}/>
         }
        return (
            <div className="Gall" style={{height:"812px",background:"#F4F3F3"}}>
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
                                    <button className="del" onClick={()=>this.del(idx,item.pltime)}>删除</button>
                                </div>
                                <p className="zhengwen">{item.plcontent}</p>
                                <div className='tupian'>
                                    {
                                        function(){
                                            if(item.plpicture){
                                                return <img src={require(`../../img/`+item.plpicture)}/>     
                                            }
                                        }()
                                    }
                                </div>
                                <footer>
                                    <div className="iconfont icon-dianzan"><span>{item.like}</span></div>
                                    <div className="iconfont icon-pinglun"><span>{item.commentno}</span></div>
                                </footer>
                            </li>
                            })
                        }
                    </ul>
            </div>
        )
    }
}
