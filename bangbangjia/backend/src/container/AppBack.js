import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Home from './Home';
import Yezhu from './Yezhu';
import Gonggao from './gonggao/Gonggao';
import Fix from './Fix';
import Fankui from './Fankui';
import Xianzhi from './Xianzhi';
import Guanli from './guanliperson/Guanli';
import FabuNotice from './gonggao/Fabu'
import Tianjia from './guanliperson/Tianjia';
import Show from './guanliperson/Show';

export default class AppBack extends Component {
    constructor(props){
        super(props);
        this.state={
            touxiang:"login_touxiang.jpg"
        }
    }
    exit=()=>{
        fetch("http://localhost:4000/backexit")
            .then((res)=>res.text())
            .then((res)=>{
                console.log(res);
                if(res=="exit success"){
                    localStorage.removeItem("phone");
                    alert("退出成功");
                }else{
                    alert("出错了");
                }
            })
    }
    componentWillMount(){
        let phone=localStorage.getItem("phone");
        fetch("http://localhost:4000/backtouxiang_shou", { 
            method: "POST", 
            mode: 'cors',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify({"phone":phone})
        })
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
            this.setState({
                touxiang:res
            })
        });
    }
    render() {
        return (
                <div className="all" >
                    <div className="heade">
                        <div className='bang' >帮帮家</div>
                        <div className="headeRight">您的贴心管家</div>
                    </div>
                    <div className='left'>
                        <div style={{height:"130px",backgroundColor:'rgb(235,236,253)',padding:'20px'}}>
                            <div style={{width:'80px',height:'80px',backgroundColor:'white',border:'1px solid #d8d8d8',borderRadius:'10px',margin:'0 auto'}}>
                               <img src={require('../img/'+this.state.touxiang)} style={{width:'80px',height:'80px',border:'4px solid white',borderRadius:'10px'}}/> 
                            </div>
                        </div>
                        <ul>


                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>  
                                <Link to='/appback/home'>首页</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>  
                                <Link to='/appback/yezhu'>业主管理</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>  
                                <Link to='/appback/gonggao'>公告管理</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>  
                                <Link to='/appback/fix'>报修信息管理</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>
                                <Link to='/appback/fankui'>反馈管理</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>
                                <Link to='/appback/xianzhi'>闲置信息管理</Link>
                            </li>
                            <li>
                                <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i> 
                                <Link to='/appback/guanli'>管理人员</Link>
                            </li>
                        </ul>
                        <div className="exit" style={{padding:'45px 0 0 20px'}}>
                            <i style={{marginRight:"5px",fontSize:10}} className="iconfont icon-icon-"></i>
                            <Link onClick={this.exit} to='/'>Exit</Link>
                        </div>
                    </div>
                    <div className='content'>

                        <Route path='/appback/home' component={Home} />
                        <Route path='/appback/yezhu' component={Yezhu} />
                        <Route exact path='/appback/gonggao' component={Gonggao} />
                        <Route path='/appback/fix' component={Fix} />
                        <Route path='/appback/fankui' component={Fankui} />
                        <Route path='/appback/xianzhi' component={Xianzhi} />
                        <Route path='/appback/guanli' component={Guanli} />

                        {/* 二级页面 */}
                        <Route exact path='/appback/gonggao/fabuNotice' component={FabuNotice} />
                        <Route path='/appback/guanli/tianjia' component={Tianjia}/>
                        <Route path='/appback/guanli/show' component={Show}/>


                    </div>
                </div>
        )
    }
}
