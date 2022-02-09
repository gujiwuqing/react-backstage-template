import React from "react";
import {Button} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";

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
  return <div>
    <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
    </Button></div>
}
export default BaseHeader;
