import React from 'react'
import { NavLink } from 'react-router-dom';

import { Menu, Space, Row, Col } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';

const UnlogBar = () => {
    
    return (
            <Row justify="center">
                <Col span={4}>
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
                    </Menu>
                </Space>
                </Col>
            </Row>
        
    )
}

export default UnlogBar;