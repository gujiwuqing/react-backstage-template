import React from 'react';
import {Layout, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {useSelector} from "react-redux";
import {menu} from '@/router';
import {history} from "umi";

const {Sider} = Layout;

const BaseMenu = () => {
  const {collapsed} = useSelector((state: any) => state.global)
  const handleClick = (path:string) => {
    history.push(path)
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh'}}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{height:'100%'}}
        theme="dark"
      >
        {
          menu.map(item=>{
            return <Menu.Item key={item.path}  icon={<UserOutlined />} onClick={()=>{
              handleClick(item.path)
            }}>{item.name}</Menu.Item>
          })
        }
      </Menu>
    </Sider>
  );
}

export default BaseMenu;
