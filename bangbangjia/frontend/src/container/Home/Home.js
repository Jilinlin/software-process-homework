import React, { Component } from 'react'
import { NavBar,Carousel,Grid,WhiteSpace} from 'antd-mobile';
import { Redirect } from "react-router-dom";

// 第三部分宫格对应图片
const array=[
    {className:'iconfont icon-gonggao',text:"小区公告"},
    {className:'iconfont icon-icon_jiaofeijilu-copy',text:"生活缴费"},
    {className:'iconfont icon-buoumaotubiao46',text:"维修服务"},
    {className:'iconfont icon-lie-b',text:"闲置信息"},
    {className:'iconfont icon-tousu',text:"投诉建议"},
    {className:'iconfont icon-cheliang',text:"违章查询"}];
const data = array.map((item) => ({
    icon:item.className,
    text: item.text,
  }));

// 第五部分特价优惠
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`placeholder`} {...restProps}>
        <img src={require(`../../img/首页-热门.jpg`)} style={{width:'100%',height:'100%'}}/>
    </div>
);

export default class Home extends Component {
    //构造函数 初始化状态详细页不显示
    constructor(props) {
        super(props);
        this.state = {
          gonggao:false,
          jiaofei:false,
          weixiu:false,
          xianzhi:false,
          tousu:false,
          findtraffic:false,
        };
    }
    // 打开详细
    changeClick=(text)=>{
        if(text=="小区公告"){
            this.setState({
                gonggao :true
            })
        }else if(text=="生活缴费"){
            this.setState({
                jiaofei :true
            })
        }else if(text=="维修服务"){
            this.setState({
                weixiu :true
            })
        }else if(text=="闲置信息"){
            this.setState({
                xianzhi :true
            })
        }else if(text=="投诉建议"){
            this.setState({
                tousu :true
            })
        }else if(text=="违章查询"){
            this.setState({
                findtraffic :true
            })
        }
    }


    render() {
        // 进行路由跳转
        if(this.state.gonggao){
            return <Redirect to='/gonggao'/>
        }else if(this.state.jiaofei){
            return <Redirect to='/jiaofei'/>    
        }else if(this.state.weixiu){
            return <Redirect to='/weixiu'/>    
        }else if(this.state.xianzhi){
            return <Redirect to='/xianzhi'/>    
        }else if(this.state.tousu){
            return <Redirect to='/tousu'/>    
        }else if(this.state.findtraffic){
            return <Redirect to='/findtraffic'/>    
        }
        return (
            <div style={{height:"100%",background:"#F4F3F3"}}>
                {/* 一、导航栏 */}
                <NavBar mode="light" style={{height:60}}>
                    <div style={{fontSize:22}}>帮帮家</div>
                </NavBar>

                {/* 二、轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {[1,2,3].map(val => (
                        <div
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={require(`../../img/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>

                {/* 三、宫格 */} 
                {/* 留白 */}
                <WhiteSpace size="xl" />
                <Grid data={data}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div onClick={()=>{this.changeClick(dataItem.text)}}>
                            <i style={{fontSize:40,color:'#d2230c'}} className={dataItem.icon}></i>
                            <div style={{ color: '#000', fontSize: '14px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />

                {/* 四、附近热门 */}
                {/* 留白 */}
                <WhiteSpace size="xs" />                
                <NavBar
                    mode="light"
                    style={{border:"1px solid white",height:40}}
                > 
                    <div style={{color:'#b01f0c',fontSize:8}}>附近热门</div>
                </NavBar>

                {/* 五、特大优惠 */}
                <PlaceHolder />

            </div>
        )
    }
}
