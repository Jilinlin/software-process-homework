import React, { Component } from 'react'
import './Login.css'
import  {NavBar,Icon,InputItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import Setquestion from './Setquestion';

export default class Idetified extends Component {
    constructor(props){
        super(props);
        this.state={
            handle:false
        }
        this.state={
            back:false
        }
    }
    
          handle=(e)=>{
            e.preventDefault();
            let handle=document.querySelector("input[type=text]").value;
            console.log(handle);
            if(handle!==""){
                this.setState({
                     handle :true
               })
            }
           
        }
        back=(e)=>{
            e.preventDefault();
            this.setState({
                back:true
            })

        }
    render() {
        if(this.state.handle){
            console.log(this.state.handle)
            return  <Redirect to="/resetpw"/>
        }
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/forgetpw"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
               <NavBar style={{backgroundColor:'#eee'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}} />}
                    onLeftClick={this.back}  
               >注册</NavBar>
               <div className='content'>
                   <p className='content3' >选择验证方式</p>
                   <p className='content4'>&nbsp;&nbsp;>&nbsp;&nbsp;安全验证</p>
                   <p className='content5'>&nbsp;&nbsp;>&nbsp;&nbsp;重置登录密码</p>
               </div>
               <div className='yanzhengma'>
                  您父亲的名字是：
               </div>
               <form style={{width:'100%'}} onSubmit={this.handle}>
                   
                       <input type='text' name='name' id='name' placeholder='请输入答案'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0'}}></input>
                  
                       <button style={ {color: 'white',fontSize: 20,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px'} } value='登录' type='submit'>提交答案 </button>   
                  
                  
                </form>
            </div>
        )
    }
}
