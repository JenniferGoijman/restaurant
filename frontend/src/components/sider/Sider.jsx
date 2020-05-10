import React, { useState } from './node_modules/react'
import { NavLink } from './node_modules/react-router-dom';
import { connect } from './node_modules/react-redux'

import { Menu } from './node_modules/antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from './node_modules/@ant-design/icons';

const { SubMenu } = Menu;

function Siderbar({user}) {
    const handleClick = e => {
        console.log('click ', e);
      };
    

    return (
        <Menu
        onClick={handleClick()}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        >
            <Menu.Item  >
                <UserOutlined />  
                <NavLink to='/' exact>
                    Home
                </NavLink>
            </Menu.Item>
            <SubMenu key="sub1" 
                title={
                    <span>
                        <MailOutlined />
                        <span>
                        Products
                        </span>
                    </span>
            }>
                <Menu.Item  >
                    <UserOutlined />  
                    <NavLink to='/admin-products' exact>
                        Admin Products
                    </NavLink>
                </Menu.Item>
                <Menu.Item  >
                    <UserOutlined />  
                    <NavLink to='/all-products' exact>
                        All Products
                    </NavLink>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            </SubMenu>
            <SubMenu
            key="sub4"
            title={
                <span>
                <SettingOutlined />
                <span>Navigation Three</span>
                </span>
            }
            >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
      </Menu>  
    )
  }
  
  const mapStateToProps = state => ({ user: state.user });
  export default connect(mapStateToProps)(Siderbar);