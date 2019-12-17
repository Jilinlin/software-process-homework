import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home/Home'
import Guangchang from './Guangchang/Guangchang';
import Mine from './Mine/Mine'


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    if(this.props.location.state==undefined){
      this.state = {
        selectedTab: 'home',
      };
    }else{
      if(this.props.location.state.tab=="1"){
        this.state = {
          selectedTab: 'home'
        }
        // console.log(1);
      }else if(this.props.location.state.tab=="2"){
        this.state = {
          selectedTab: 'greenTab'
        }
        // console.log(2);
      }else if(this.props.location.state.tab=="3"){
        this.state = {
          selectedTab: 'my'
        }
        // console.log(3);
      }else{
        this.state = {
          selectedTab: 'home'
        }
      }
    }
  }

  render() {

    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>

        <TabBar
          unselectedTintColor="black"
          tintColor="rgb(179,68,73)"
          barTintColor="white"
        >
            {/* 首页 */}
          <TabBar.Item
            title="首页"
            key="Life"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {//设置状态 
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
              {/* 引入Home组件 */}
              <Home/>
          </TabBar.Item>

            
            {/* 广场 */}
          <TabBar.Item
            
            title="广场"
            key="Order"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-mingcijieshi'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-mingcijieshi'></i>
            }
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
              {/* 引入广场组件 */}
              <Guangchang/>
          </TabBar.Item>

            {/* 我的 */}
          <TabBar.Item
            title="我的"
            key="my"
            // 图标样式
            icon={
              <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            // 选中时图标样式
            selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            {/* 引入我的组件 */}
            <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}