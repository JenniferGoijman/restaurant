import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//IMPORTS COMPONENTS & CONTAINERS
import Nav from './components/header/Header';
import Login from './containers/user/login/Login';
import Register from './containers/user/register/Register';
import AdminProducts from './containers/admin/Admin-Products';
import Home from './containers/home/home'
import AllProducts from './containers/admin/All-Products';


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/admin-products' component={AdminProducts} exact />
          <Route path='/all-products' component={AllProducts} exact />
          <Route path='/home' component={Home} exact />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
