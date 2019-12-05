import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {HashRouter as Router, Route } from "react-router-dom";

import AppTab from './container/AppTab'
// 登录
import Login from './login/Login'
import Forgetpw from './login/Forgetpw'
import Home from './container/Home/Home'
import Register from './login/Register'
import Setpassword from './login/Setpassword'
import Setquestion from './login/Setquestion'
import Idetified from './login/Idetified'
import Resetpw from './login/Resetpw'
// 首页
import Gonggao from './container/Home/Gonggao'//公告
import Weixiu from './container/Home/Weixiu'//维修
import Xiangqing from './container/Home/Xiangqing'//（维修二级页面）
import Xianzhi from './container/Home/Xianzhi'//闲置
import Wupin from './container/Home/Wupin'//（闲置二级页面）
import Tousu from './container/Home/Tousu'//投诉
import Baike from './container/Home/Baike'//交通违章
import FindTraffic from './container/Home/Traffic/FindTraffic'//（交通违章二级页面）
import BreakTraffic from './container/Home/Traffic/BreakTraffic'//（交通违章二级页面）
import Jiaofei from './container/Home/Jiaofei/Jiaofei'//缴费
import Dianfei from './container/Home/Jiaofei/Every/Dianfei'//(缴费二级页面)
import Diannext from './container/Home/Jiaofei/Every/Diannext'//(缴费二级页面)
import Shuifei from './container/Home/Jiaofei/Every/Shuifei'//(缴费二级页面)
import Shuinext from './container/Home/Jiaofei/Every/Shuinext'//(缴费二级页面)
import Gongnuan from './container/Home/Jiaofei/Every/Gongnuan'//(缴费二级页面)
import Gongnext from './container/Home/Jiaofei/Every/Gongnext'//(缴费二级页面)
import Ranqi from './container/Home/Jiaofei/Every/Ranqi'//(缴费二级页面)
import Rannext from './container/Home/Jiaofei/Every/Rannext'//(缴费二级页面)
import Payment from './container/Home/Jiaofei/Pay/Payment'//(缴费二级页面)
import Paypwd from './container/Home/Jiaofei/Pay/Paypwd'//(缴费二级页面)
import Paysuccess from './container/Home/Jiaofei/Pay/Paysuccess'//(缴费二级页面)



// 广场
import Fabu from './container/Guangchang/Fabu';
import Mys from './container/Guangchang/Mys';
import Guangchang from './container/Guangchang/Guangchang';

//我的
import Mine from './container/Mine/Mine'
import Payment1 from "./container/Mine/Payment"
import Setting from "./container/Mine/Setting"
import User from "./container/Mine/User"
import Username from "./container/Mine/Username"
import Userphone from "./container/Mine/Userphone"
import Usernumber from "./container/Mine/Usernumber"
import Password from "./container/Mine/Password"



export default class App extends Component {
    render() {
        return (
            <Router>
                
                {/* 一、登录 */}
                <Route exact path="/" component={Login}  />
                <Route  path="/home" component={Home}  />
                <Route  path="/register" component={Register}  />
                <Route  path="/forgetpw" component={Forgetpw}  />
                <Route  path="/setquestion" component={Setquestion}  />
                <Route  path="/Setpassword" component={Setpassword}  />
                <Route  path="/idetified" component={Idetified}  />
                <Route  path="/resetpw" component={Resetpw}  />


                {/* 二、首页内容 */}
                <Route  exact path="/shouye" component={AppTab}  />
                <Route  exact path="/gonggao" component={Gonggao}  />
                <Route  exact path="/jiaofei" component={Jiaofei}  />
                <Route  exact path="/weixiu" component={Weixiu}  />
                <Route  exact path="/xianzhi" component={Xianzhi}  />
                <Route  exact path="/tousu" component={Tousu}  />
                <Route  exact path="/baike" component={Baike}  />
                {/* 维修服务二级页面 */}
                <Route  exact path="/xiangqing" component={Xiangqing}  />
                {/* 闲置信息二级页面 */}
                <Route  exact path="/wupin" component={Wupin}/>
                {/* 违章查询二级页面 */}
                <Route  exact path="/findtraffic" component={FindTraffic}  />
                <Route  exact path="/breaktraffic" component={BreakTraffic}  />
                {/* 生活缴费二级页面 */}
                {/* 缴费-电费 */}
                <Route exact path="/dianfei" component={Dianfei}/>
                <Route exact path="/diannext" component={Diannext}/>
                {/* 缴费-水费 */}
                <Route exact path="/shuifei" component={Shuifei}/>
                <Route exact path="/shuinext" component={Shuinext}/>
                {/* 缴费-供暖费 */}
                <Route exact path="/gongnuan" component={Gongnuan}/>
                <Route exact path="/gongnext" component={Gongnext}/>
                {/* 缴费-燃气费 */}
                <Route exact path="/ranqi" component={Ranqi}/>
                <Route exact path="/rannext" component={Rannext}/>
                {/* 缴费-支付 */}
                <Route exact path="/payment" component={Payment}/>
                <Route exact path="/paypwd" component={Paypwd}/>
                <Route exact path="/paysuccess" component={Paysuccess}/>




                {/* 三、广场内容 */}
                <Route exact path='/guangchang' component={Guangchang} />
                <Route exact path='/fabu' component={Fabu} />
                <Route exact path='/mys' component={Mys} />


                {/* 四、我的内容 */}
                <Route exact path='/mine' component={Mine} />
                <Route path="/payment1" component={Payment1} />
                <Route path="/setting" component={Setting} />
                <Route path="/user" component={User} />
                <Route path="/username" component={Username} />
                <Route path="/userphone" component={Userphone} />
                <Route path="/usernumber" component={Usernumber} />
                <Route path="/password" component={Password} />

            </Router>
        )
    }
}
