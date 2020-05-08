import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS COMPONENTS & CONTAINERS
import Nav from './components/header/header';
import Login from './containers/home/Login/Login';
import Register from './containers/home/register/Register';
import AdminProducts from './containers/admin/Admin-Products';
import Home from './containers/home/home'
import AllProducts from './containers/admin/All-Products';
import UserView from './containers/user/UserView';


function App({user}) {
  return (
    <div className="App">   
      <BrowserRouter>
        {!user.user && <Nav/>}
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/admin-products' component={AdminProducts} exact />
          <Route path='/all-products' component={AllProducts} exact />
          <Route path='/' component={Home} exact />
          <Route path='/userView' component={UserView} exact />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(App);