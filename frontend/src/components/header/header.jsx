import React from 'react'
import { NavLink } from 'react-router-dom';

import { Menu, Space, Row, Col } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';

const Header = () => {
    
    return (
        <header className="homeHeader animated zoomIn ">
            <Row justify="center">
                <Col span={5}>
                <Space>
                    <Menu className="homeMenu"  mode="horizontal">
                        <Menu.Item >
                            <UserAddOutlined /> 
                            <NavLink to='/login' exact>
                                Login
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item  >
                            <UserOutlined />  
                            <NavLink to='/register' exact>
                                Register
                            </NavLink>
                        </Menu.Item>
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
                    </Menu>
                </Space>
                </Col>
            </Row>
        </header>    
    )
}

export default Header