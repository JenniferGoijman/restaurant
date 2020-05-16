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
        <SubMenu icon={<ShoppingCartOutlined />} title="Productos">
            <Menu.Item  >
                    <PlusSquareOutlined />
                    <NavLink to='/admin-products' exact>
                        Nuevo Producto
                    </NavLink>
            </Menu.Item>
            <Menu.Item  >
                    <ProfileOutlined />
                    <NavLink to='/all-products' exact>
                        Ver Productos
                    </NavLink>
                </Menu.Item>
        </SubMenu>
        <SubMenu icon={<ShoppingCartOutlined />} title="Categorías">
            <Menu.Item  >
                <ProfileOutlined />
                <NavLink to='/all-categories' exact>
                    Ver Categorías
                </NavLink>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="adminUsers" >
                <HomeOutlined />
                <NavLink to='/adminUser' exact>
                    Gestion de Usuarios
                </NavLink>
        </Menu.Item>
        
      </Menu>
              </Col>
          </Row>
      
    );
  }

  export default LogBar;