import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

//IMPORTS COMPONENTS & CONTAINERS
import Nav from './components/header/header';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import AdminProducts from './containers/admin/Admin-Products';
import Home from './containers/home/home'
import AllProducts from './containers/admin/All-Products';
import UserView from './containers/user/UserView';
import Sider from './components/sider/Sider'



function App({user}) {

  return (
    <div className="App">   
      <BrowserRouter>
        <Row>
          <Col span={24}>
            <Header/>
          </Col>  
          <Col span={24}>
            <Switch>
              <Route path='/login' component={Login} exact />
              <Route path='/register' component={Register} exact />
              <Route path='/admin-products' component={AdminProducts} exact />
              <Route path='/all-products' component={AllProducts} exact />
              <Route path='/' component={Home} exact />
              <Route path='/userView' component={UserView} exact />
            </Switch>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(App);