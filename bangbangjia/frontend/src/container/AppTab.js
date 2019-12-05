import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home/Home'
import Guangchang from './Guangchang/Guangchang';
import Mine from './Mine/Mine'


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',//默认进入首页
      // selectedTab: 'greenTab',//默认进入广场
      // selectedTab: 'my',//默认进入我的
    };
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