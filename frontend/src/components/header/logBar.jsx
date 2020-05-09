import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Row, Col } from 'antd';
import { HomeOutlined, PlusSquareOutlined, ProfileOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const LogBar = () => {


    return (
        <Row justify="center" style={{borderBottom:" 1px solid #d4d4d4"}}>
              <Col  >
              <Menu  mode="horizontal">
        <Menu.Item key="mail" >
                <HomeOutlined />
                <NavLink to='/userView' exact>
                    Home
                </NavLink>
        </Menu.Item>
        <SubMenu icon={<ShoppingCartOutlined />} title="Products">
            <Menu.Item  >
                    <PlusSquareOutlined />
                    <NavLink to='/admin-products' exact>
                        Admin Products
                    </NavLink>
            </Menu.Item>
            <Menu.Item  >
                    <ProfileOutlined />
                    <NavLink to='/all-products' exact>
                        All Products
                    </NavLink>
                </Menu.Item>
        </SubMenu>
        
      </Menu>
              </Col>
          </Row>
      
    );
  }

  export default LogBar;