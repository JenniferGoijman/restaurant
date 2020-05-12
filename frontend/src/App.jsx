import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

//IMPORTS COMPONENTS & CONTAINERS
import Header from './Components/Header/Header';
import Login from './Containers/User/Login/Login';
import Register from './Containers/User/Register/Register';
import AdminProducts from './Containers/Admin/Admin-Products/Admin-Products';
import Home from './Containers/Home/Home'
import AllProducts from './Containers/Admin/All-Products/All-Products';
import AllCategories from './Containers/Admin/All-Categories/All-Categories';
import UserView from './Containers/User/UserView';
import Menu from './Containers/Menu/Menu';
//import Sider from './Components/Sider/Sider'



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
              <Route path='/all-categories' component={AllCategories} exact />
              <Route path='/' component={Home} exact />
              <Route path='/userView' component={UserView} exact />
              <Route path='/menu' component={Menu} exact />
            </Switch>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(App);