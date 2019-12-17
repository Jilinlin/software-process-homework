import React, { Component } from 'react'
import './Login.css'
import  {NavBar,Icon,InputItem} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

export default class Setquestion extends Component {
    constructor(props){
        super(props);
        this.state={
            setquestion:false
        }
        this.state={
            back:false
        }
    }
    
        dosetquestion=(e)=>{
            e.preventDefault();
            var phone=this.props.location.state.phone;
            let setquestion=document.querySelector("input[type=text]").value;
            console.log(setquestion);
            if(setquestion!==""){
            //     this.setState({
            //          setquestion :true
            //    })
            fetch('http://localhost:8000/setques', { 
                method: "POST", 
                mode: 'cors',
            　　headers: {
            　　　　'Content-Type': 'application/json'
            　　},
            　　body:JSON.stringify({"phonenumber":phone,"setquestion":setquestion})
            })
            .then((res) => res.text())
            .then((res) => {
                if(res=="ok"){
                        this.setState({
                            setquestion :true
                        })
                }else{
                    alert("出问题了");
                }
        
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
        // console.log(this.props.location.state.phone);
        if(this.state.setquestion){
            console.log(this.state.setquestion)
            return  <Redirect to={{pathname:"/setpassword",state:{phone:this.props.location.state.phone}}}/>
        }
        if(this.state.back){
            console.log(this.state.back)
            return  <Redirect to="/register"/>
        }
        return (
            <div style={{width:'100%',height:812,backgroundColor:'#eee'}}>
               <NavBar style={{backgroundColor:'#eee'}}
                    mode="light"
                    icon={<Icon type="left" style={{color:'black'}} />}
                    onLeftClick={this.back}  
               >注册</NavBar>
               <div className='content'>
                   <p className='content3' >1.输入手机号</p>
                   <p className='content4'>&nbsp;&nbsp;>&nbsp;&nbsp;2.设置问题答案</p>
                   <p className='content5'>&nbsp;&nbsp;>&nbsp;&nbsp;3.设置密码</p>
               </div>
               <div className='yanzhengma'>
                  您父亲的名字是：
               </div>
               <form style={{width:'100%'}} onSubmit={this.dosetquestion}>
                   
                       <input type='text' name='name' id='name' placeholder='请输入答案'style={{width:'90%',height:'40px',marginLeft:'5%',backgroundColor:'white',border:'0'}}></input>
                  
                       <button style={ {color: 'white',fontSize: 20,backgroundColor:'#b34449',border:'0',width:'90%',height:'50px',marginLeft:'5%',marginTop:'20px'} } value='登录' type='submit'>提交答案 </button>   
                  
                  
                </form>
            </div>
        )
    }
}
