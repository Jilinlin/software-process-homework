import React, { Component } from 'react'
import './Login.css'
import  {NavBar,Icon,InputItem} from 'antd-mobile'
import Login from './Login'
import {Redirect} from 'react-router-dom'



export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            register:false
        }
        this.state={
            back:false
        }
    }
    
        doregister=(e)=>{
            e.preventDefault();
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            let phonenumber=document.querySelector("input[type=tel]").value;
            console.log(phonenumber);
            if(myreg.test(phonenumber)){
                this.setState({
                     register :true
               })
            }
            else{
                alert('请检查输入的手机号是否有误')
            }
        }
        back=(e)=>{
            e.preventDefault();
            this.setState({
                back:true
            })

        }
    render() {
        if(this.state.register){
            console.log(this.state.register)
            return  <Redirect to="/setquestion"/>
        }
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
               <NavBar style={{backgroundColor:'#eee'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}} / >}
                     onLeftClick={this.back}  
               >注册</NavBar>
               <div className='content'>
                   <p className='content1' >1.输入手机号</p>
                   <p className='content2'>&nbsp;&nbsp;>&nbsp;&nbsp;2.设置问题答案&nbsp;&nbsp;>&nbsp;&nbsp;3.设置密码</p>
               </div>
               <form style={{width:'100%'}} onSubmit={this.doregister}>
                  
                       <input type='tel' name='tel' id='name'  placeholder='请输入您的手机号'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0'}}></input>
                   
                   
                       <button style={ {color: 'white',fontSize: 20,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px'} } value='登录' type='submit'>设置问题答案 </button>   
                  
                  
                </form>
            </div>
        )
    }
}
