import React, { Component } from 'react'
import './Login.css'
import  {NavBar,Icon,InputItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

export default class Setpassword extends Component {
    constructor(props){
        super(props);
        this.state={
            setpw:false
        }
        this.state={
            back:false
        }
    }
    
        dosetpw=(e)=>{
            e.preventDefault();
            let oldpw=document.querySelector("input[id=name1]").value;
            let newpw=document.querySelector("input[id=name2]").value;
            oldpw.split('');
            newpw.split('');
            console.log( oldpw.split(''))
            console.log(newpw.split(''))
            if(oldpw==newpw&&oldpw.split('').length>=8&&oldpw.split('').length<=32){
                for(var i=0;i<oldpw.split('').length;i++){
                    this.setState({
                        setpw :true
                })
                }
            }}
        back=(e)=>{
            e.preventDefault();
            this.setState({
                back:true
            })

        }
    render() {
        if(this.state.setpw){
            return  <Redirect to="/"/>
        }
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/setquestion"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
                 <NavBar style={{backgroundColor:'#eee'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}} />}
                    onLeftClick={this.back}  
                >设置密码</NavBar>
                <div className='content'>
                   <p className='content3' >1.输入手机号</p>
                   <p className='content5'>&nbsp;&nbsp;>&nbsp;&nbsp;2.设置问题答案</p>
                   <p className='content4'>&nbsp;&nbsp;>&nbsp;&nbsp;3.设置密码</p>
               </div>
                <form onSubmit={this.dosetpw}>
                <div className='setpw'>
                     <input type='text' name='name' id='name1' placeholder='输入密码'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0'}} ></input>
                     <input type='text' name='name' id='name2' placeholder='确认密码'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0',marginTop:10}} ></input>
                </div >
                <div className='setpw1'>密码长度8-32位，须包含数字、字母2种元素。</div>
                <div>
                       <button style={ {color: 'white',fontSize: 20,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%'} } value='登录' type='submit'>确认提交 </button>   
                </div>
                </form>
            </div>
        )
    }
}
