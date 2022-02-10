import React from 'react';
import {Layout, Menu} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {menu} from '@/router';
import {history} from "umi";
import IconFont from "@/components/IconFont";

const {Sider} = Layout;
const {SubMenu} = Menu;

const BaseMenu = () => {
  const {collapsed, activeRoute} = useSelector((state: any) => state.global)
  const dispatch = useDispatch()
  const handleClick = (path: string) => {
    history.push(path)
    dispatch({
      type: 'global/changeActiveRoute',
      payload: {
        activeRoute: path
      }
    })
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight: '100vh'}}>
      <Menu
        defaultSelectedKeys={activeRoute}
        mode="inline"
        style={{height: '100%'}}
        theme="dark"
      >
        {
          menu.map(item => {
            if (item.children) {
              return <SubMenu key={item.path} icon={<IconFont type={item.icon}/>} title={item.name}>
                {
                  item.children.map(t => {
                    return (
                      <Menu.Item
                        key={t.path}
                        onClick={() => {
                          handleClick(t.path)
                        }}
                      >
                        {t.name}
                      </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            } else {
              return <Menu.Item key={item.path} icon={<IconFont type={item.icon}/>} onClick={() => {
                handleClick(item.path)
              }}>{item.name}</Menu.Item>
            }
          })
        }
      </Menu>
    </Sider>
  )
    ;
}

export default BaseMenu;
