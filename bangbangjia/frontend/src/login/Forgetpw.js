import React, { Component } from 'react'
import './Login.css'
import  {NavBar,Icon,InputItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

export default class Forgetpw extends Component {
    constructor(props){
        super(props);
        this.state={
            idetified:false
        }
        this.state={
            back:false
        }
    }
    
    doidetified=(e)=>{
            e.preventDefault();
            let answer=document.querySelector("input[type=text]").value;
            console.log(answer);
            if(answer=="是"){
                this.setState({
                    idetified :true
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
        if(this.state.idetified){
            return  <Redirect to="/idetified"/>
        }
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
               <NavBar style={{backgroundColor:'#eee'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}} />}
                    onLeftClick={this.back}  
               >找回密码</NavBar>
               <div className='content'>
                   <p className='content1' >选择验证方式</p>
                   <p className='content2'>&nbsp;&nbsp;>&nbsp;&nbsp;安全验证&nbsp;&nbsp;>&nbsp;&nbsp;找回登录密码</p>
               </div>
               <form onSubmit={this.doidetified}>
                 <div>
                       <input type='text' name='name' id='name' placeholder='是否愿意采用回答问题方式找回密码'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0'}}></input>
                </div>
                <div>
                       <button style={ {color: 'white',fontSize: 20,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px'} } value='登录' type='submit'>立即验证 </button>   
                   </div>
                </form>
            </div>
        )
    }
}
