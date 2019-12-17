import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Show extends Component {
    constructor(props){
    super(props);
    this.state={
        // data:[this.props.location.state],
        data:[],
        back:false
    }}
    back=(e)=>{
        e.preventDefault();
        this.setState({
            back:true
        })
    }
    componentWillMount(){
        var mname=this.props.location.state.mname;
        console.log(mname);
        fetch("http://localhost:4000/backguanli_show",{
            method:"POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({"mname":mname})
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            })
            console.log(this.state.data);
        })
    }
        
    render() {
        console.log(this.props)
        if(this.state.back){
            // console.log(this.state.back)
            return  <Redirect to="/appback/guanli"/>
        }
        return (
            <div> 
                <div style={{width:'660px',height:100,borderRight:'1px solid gray',borderBottom:'1px solid gray'}}>
                    <p style={{float:'left',fontSize:'25px',marginTop:'25px',marginLeft:'20px'}}>显示管理员信息</p>
                    <div style={{width:'70px',height:'30px',float:'right',marginTop:35,marginRight:25}} onClick={this.back}>
                        <i  className='iconfont icon-fanhui' style={{float:'left',fontSize:20}}></i>
                        <p style={{marginLeft:30,fontSize:18}}>返回</p>
                    </div>
                </div>
                <div style={{width:'660px',height:450}}>
                    <ul>
                        {
                            this.state.data.map((item,idx)=>{ 
                                return <li key={idx} style={{width:'660px',height:'450px'}}>
                                       <div className='show'>
                                           <img style={{width:'100px',height:'100px',border:'1px solid #eee',borderRadius:10,marginLeft:280,marginTop:30}} src={require('../../img/'+item.mpicture)}/>
                                       </div>
                                       <div >
                                               <div className='show1'>工号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.mno}</div>
                                               <div className='show1'>姓名：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.mname}</div>
                                               <div className='show1'>年龄：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.mage}</div>
                                               <div className='show1'>身份证号：{item.mid}</div>
                                               <div className='show1'>手机号：&nbsp;&nbsp;&nbsp;&nbsp;{item.mphone}</div>
                                            
                                       </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
