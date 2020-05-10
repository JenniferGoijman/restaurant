import React from 'react'
import { NavLink } from 'react-router-dom';

import { Menu, Row, Col } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';

const UnlogBar = () => {
    
    return (
            <Row justify="center" style={{borderBottom:" 1px solid #d4d4d4"}}>
                <Col>
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
                </Col>
            </Row>
        
    )
}

export default UnlogBar;