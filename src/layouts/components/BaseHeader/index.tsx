import React from "react";
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined,UserOutlined} from '@ant-design/icons';
import {Dropdown, Menu} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import styles from '../../index.module.less'


const menu = (
  <Menu>
    <Menu.Item key='1'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        退出登录
      </a>
    </Menu.Item>
    <Menu.Item key='2'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <UserOutlined/>
        <span>个人中心</span>
      </a>
    </Menu.Item>
  </Menu>
)

const BaseHeader = () => {
  const {collapsed} = useSelector((state: any) => state.global)
  const dispatch = useDispatch()
  const toggleCollapsed = () => {
    dispatch({
      type: 'global/changeCollapsed',
      payload: {
        collapsed: !collapsed
      }
    })
  }

  return <div className={styles.header}>
    <div>
      <span>后台管理系统</span>
      <span className={styles.header_icon} onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined/> :
        <MenuFoldOutlined/>}</span>
    </div>
    <div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          User <DownOutlined/>
        </a>
      </Dropdown>
    </div>
  </div>
}
export default BaseHeader;
